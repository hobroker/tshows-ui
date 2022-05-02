import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  FullShow,
  useFullShowQuery,
  useGetSeasonEpisodesLazyQuery,
  useUpsertSeasonEpisodeMutation,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { EpisodeWithoutShow } from '../features/episode/types';

interface ContextType {
  show: FullShow;
  episodesMap: Record<number, EpisodeWithoutShow[]>;
  loading: boolean;
  update: (data: Partial<FullShow>) => void;
  fetchSeason: (seasonNumber: number) => void;
  watchEpisode: (
    seasonNumber: number,
    episodeId: number,
    isWatched: boolean,
  ) => void;
}

interface Props {
  externalId: number;
  children: ReactNode;
}

const ShowPageContext = createContext<ContextType>({
  show: {} as FullShow,
  episodesMap: {},
  loading: true,
  update: noop,
  fetchSeason: noop,
  watchEpisode: noop,
});

const ShowPageProvider = ({ children, externalId }: Props) => {
  const { data, loading } = useFullShowQuery({ variables: { externalId } });
  const [fetchSeasonEpisodes] = useGetSeasonEpisodesLazyQuery();
  const [show, setShow] = useState<FullShow>();
  const [episodesMap, setEpisodesMap] = useState<
    Record<number, EpisodeWithoutShow[]>
  >({});
  const [upsertEpisode] = useUpsertSeasonEpisodeMutation();

  const update = useCallback(
    (data: Partial<FullShow>) => {
      if (!show) {
        return;
      }

      setShow({ ...show, ...data });
    },
    [show],
  );

  const fetchSeason = useCallback(
    async (seasonNumber: number) => {
      if (episodesMap[seasonNumber]) {
        return;
      }

      const { data } = await fetchSeasonEpisodes({
        variables: { showId: externalId, seasonNumber },
      });

      if (!data?.getSeasonEpisodes) {
        return;
      }

      setEpisodesMap({
        ...episodesMap,
        [seasonNumber]: data.getSeasonEpisodes,
      });
    },
    [episodesMap, externalId, fetchSeasonEpisodes],
  );

  const watchEpisode = useCallback(
    async (seasonNumber: number, episodeId: number, isWatched: boolean) => {
      setEpisodesMap((episodesMap) => ({
        ...episodesMap,
        [seasonNumber]: episodesMap[seasonNumber].map((episode) =>
          episode.id !== episodeId ? episode : { ...episode, isWatched },
        ),
      }));

      await upsertEpisode({ variables: { episodeId, isWatched } });
    },
    [upsertEpisode],
  );

  useEffect(() => {
    if (data?.fullShow) {
      setShow(data.fullShow);
    }
  }, [data]);

  if (!show) {
    return null;
  }

  return (
    <ShowPageContext.Provider
      value={{
        show,
        loading,
        update,
        episodesMap,
        fetchSeason,
        watchEpisode,
      }}
    >
      {children}
    </ShowPageContext.Provider>
  );
};

export { ShowPageContext };

export default ShowPageProvider;
