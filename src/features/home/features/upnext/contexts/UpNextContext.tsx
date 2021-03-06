import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { always, assoc, compose, not, propEq, when } from 'ramda';
import { noop, updateListItem } from '../../../../../utils/fp';
import {
  useListUpNextLazyQuery,
  useUpsertEpisodeMutation,
} from '../../../../../generated/graphql';
import { UserContext } from '../../../../user/contexts/UserContext';
import { UserState } from '../../../../user/constants';
import { EpisodeWithLoading } from '../../../../shows/features/episode/types';
import { StatsSummaryContext } from '../../../../stats/contexts/StatsSummaryContext';

interface ContextType {
  episodes: EpisodeWithLoading[];
  watchEpisode: (episodeId: number) => void;
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const UpNextContext = createContext<ContextType>({
  episodes: [],
  watchEpisode: noop,
  loading: false,
});

const beforeEpisodeUpdate = (episodeId: number) =>
  updateListItem(propEq('id', episodeId), assoc('loading', true));

const UpNextProvider = ({ children }: Props) => {
  const { userState } = useContext(UserContext);
  const { refetch: refetchStatsSummary } = useContext(StatsSummaryContext);
  const [fetchUpNextEpisodes, { loading }] = useListUpNextLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [upsertEpisode] = useUpsertEpisodeMutation();
  const [episodes, setEpisodes] = useState<EpisodeWithLoading[]>([]);

  const watchEpisode = useCallback(
    async (episodeId: number) => {
      setEpisodes(beforeEpisodeUpdate(episodeId));

      const { data } = await upsertEpisode({ variables: { episodeId } });

      refetchStatsSummary();

      const episode = data?.upsertEpisode;

      if (!episode) {
        setEpisodes((episodes) =>
          episodes.filter(compose(not, propEq('id', episodeId))),
        );
      } else {
        setEpisodes((episodes) =>
          episodes.map(
            when<EpisodeWithLoading, EpisodeWithLoading>(
              propEq('id', episodeId),
              always(episode),
            ),
          ),
        );
      }
    },
    [refetchStatsSummary, upsertEpisode],
  );

  useEffect(() => {
    if (userState !== UserState.LoggedIn) {
      return;
    }

    fetchUpNextEpisodes().then(({ data }) => {
      if (data?.listUpNext) {
        setEpisodes(data.listUpNext);
      }
    });
  }, [fetchUpNextEpisodes, userState]);

  return (
    <UpNextContext.Provider
      value={{
        episodes,
        watchEpisode,
        loading,
      }}
    >
      {children}
    </UpNextContext.Provider>
  );
};

export { UpNextContext };

export default UpNextProvider;
