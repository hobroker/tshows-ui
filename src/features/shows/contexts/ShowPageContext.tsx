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
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { EpisodeWithoutShow } from '../features/episode/types';

interface ContextType {
  show?: FullShow;
  episodesMap: Record<number, EpisodeWithoutShow[]>;
  loading: boolean;
  update: (data: Partial<FullShow>) => void;
  fetchSeason: (seasonNumber: number) => void;
}

interface Props {
  externalId: number;
  children: ReactNode;
}

const ShowPageContext = createContext<ContextType>({
  show: undefined,
  episodesMap: {},
  loading: true,
  update: noop,
  fetchSeason: noop,
});

const ShowPageProvider = ({ children, externalId }: Props) => {
  const { data, loading } = useFullShowQuery({ variables: { externalId } });
  const [fetchSeasonEpisodes] = useGetSeasonEpisodesLazyQuery();
  const [show, setShow] = useState<FullShow>();
  const [episodesMap, setEpisodesMap] = useState<
    Record<number, EpisodeWithoutShow[]>
  >({});

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

  useEffect(() => {
    if (data?.fullShow) {
      setShow(data.fullShow);
    }
  }, [data]);

  return (
    <ShowPageContext.Provider
      value={{
        show,
        loading,
        update,
        episodesMap,
        fetchSeason,
      }}
    >
      {children}
    </ShowPageContext.Provider>
  );
};

export { ShowPageContext };

export default ShowPageProvider;
