import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { prop } from 'ramda';
import {
  EpisodeWithoutShowFragment,
  Show,
  useFullShowQuery,
  useGetSeasonEpisodesLazyQuery,
  useToggleSeasonIsFullyWatchedMutation,
  useUpsertSeasonEpisodeMutation,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { BackdropContext } from '../../../contexts/BackdropContext';

interface ContextType {
  show: Show;
  episodesMap: Record<number, EpisodeWithoutShowFragment[]>;
  update: (data: Partial<Show>) => void;
  fetchSeason: (seasonNumber: number) => void;
  toggleEpisodeIsWatched: (
    seasonNumber: number,
    episodeId: number,
    isWatched: boolean,
  ) => void;
  toggleSeasonIsFullyWatched: (seasonNumber: number) => void;
}

interface Props {
  externalId: number;
  children: ReactNode;
}

const ShowPageContext = createContext<ContextType>({
  show: {} as Show,
  episodesMap: {},
  update: noop,
  fetchSeason: noop,
  toggleEpisodeIsWatched: noop,
  toggleSeasonIsFullyWatched: noop,
});

const ShowPageProvider = ({ children, externalId }: Props) => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { pathname } = useLocation();
  const { data, loading } = useFullShowQuery({
    variables: { externalId },
    fetchPolicy: 'network-only',
  });
  const [fetchSeasonEpisodes] = useGetSeasonEpisodesLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [show, setShow] = useState<Show>();
  const [episodesMap, setEpisodesMap] = useState<
    Record<number, EpisodeWithoutShowFragment[]>
  >({});
  const [upsertEpisode] = useUpsertSeasonEpisodeMutation();
  const [toggleSeasonIsFullyWatchedMutation] =
    useToggleSeasonIsFullyWatchedMutation();

  const update = useCallback(
    (data: Partial<Show>) => {
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

  const toggleEpisodeIsWatched = useCallback(
    async (seasonNumber: number, episodeId: number, isWatched: boolean) => {
      const episodes = episodesMap[seasonNumber].map((episode) =>
        episode.id !== episodeId ? episode : { ...episode, isWatched },
      );
      const isSeasonFullyWatched = episodes.every(prop('isWatched'));

      setEpisodesMap({
        ...episodesMap,
        [seasonNumber]: episodes,
      });

      setShow((show) =>
        !show
          ? show
          : {
              ...show,
              seasons: show.seasons.map((season) =>
                season.number !== seasonNumber
                  ? season
                  : { ...season, isFullyWatched: isSeasonFullyWatched },
              ),
            },
      );

      await upsertEpisode({ variables: { episodeId, isWatched } });
    },
    [episodesMap, upsertEpisode],
  );

  const toggleSeasonIsFullyWatched = useCallback(
    async (seasonNumber: number) => {
      if (!show) return;

      const season = show.seasons.find(
        (season) => season.number === seasonNumber,
      );

      if (!season) return;

      const isWatched = !season.isFullyWatched;

      setEpisodesMap((episodesMap) => {
        const episodes = episodesMap[seasonNumber];

        if (!episodes) return episodesMap;

        return {
          ...episodesMap,
          [seasonNumber]: episodes.map((episode) => ({
            ...episode,
            isWatched,
          })),
        };
      });

      setShow({
        ...show,
        seasons: show.seasons.map((season) =>
          season.number !== seasonNumber
            ? season
            : { ...season, isFullyWatched: isWatched },
        ),
      });

      await toggleSeasonIsFullyWatchedMutation({
        variables: { showId: show.externalId, seasonNumber },
      });
    },
    [show, toggleSeasonIsFullyWatchedMutation],
  );

  useEffect(() => {
    if (data?.fullShow) {
      setShow(data.fullShow);
    }
  }, [data]);

  useEffect(() => {
    toggleBackdrop(!show || loading);
  }, [toggleBackdrop, show, loading]);

  useEffect(() => {
    setEpisodesMap({});
    setShow(undefined);
  }, [pathname]);

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
        toggleEpisodeIsWatched,
        toggleSeasonIsFullyWatched,
      }}
    >
      {children}
    </ShowPageContext.Provider>
  );
};

export { ShowPageContext };

export default ShowPageProvider;
