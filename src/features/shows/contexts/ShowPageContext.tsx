import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  EpisodeWithoutShowFragment,
  FullShow,
  useFullShowQuery,
  useGetSeasonEpisodesLazyQuery,
  useUpsertSeasonEpisodeMutation,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { BackdropContext } from '../../../contexts/BackdropContext';

interface ContextType {
  show: FullShow;
  episodesMap: Record<number, EpisodeWithoutShowFragment[]>;
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
  update: noop,
  fetchSeason: noop,
  watchEpisode: noop,
});

const ShowPageProvider = ({ children, externalId }: Props) => {
  const { data, loading } = useFullShowQuery({
    variables: { externalId },
    fetchPolicy: 'network-only',
  });
  const [fetchSeasonEpisodes] = useGetSeasonEpisodesLazyQuery();
  const [show, setShow] = useState<FullShow>();
  const [episodesMap, setEpisodesMap] = useState<
    Record<number, EpisodeWithoutShowFragment[]>
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

  const { toggleBackdrop } = useContext(BackdropContext);

  useEffect(() => {
    toggleBackdrop(!show || loading);
  }, [toggleBackdrop, show, loading]);

  if (!show || loading) {
    return null;
  }

  return (
    <ShowPageContext.Provider
      value={{
        show,
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
