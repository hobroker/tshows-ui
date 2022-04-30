import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { assoc, compose, not, propEq } from 'ramda';
import { noop, updateListItem } from '../../../../../utils/fp';
import {
  useListUpNextLazyQuery,
  useUpsertEpisodeMutation,
} from '../../../../../generated/graphql';
import { UserContext } from '../../../../user/contexts/UserContext';
import { UserState } from '../../../../user/constants';
import { EpisodeWithShowType } from '../../../../shows/features/episode/types';

interface ContextType {
  episodes: EpisodeWithShowType[];
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
  const [fetchUpNextEpisodes, { loading }] = useListUpNextLazyQuery();
  const [upsertEpisode] = useUpsertEpisodeMutation();
  const [episodes, setEpisodes] = useState<EpisodeWithShowType[]>([]);

  const watchEpisode = useCallback(
    async (episodeId: number) => {
      setEpisodes(beforeEpisodeUpdate(episodeId));

      const { data } = await upsertEpisode({ variables: { episodeId } });

      const episode = data?.upsertEpisode;

      if (!episode) {
        setEpisodes((episodes) =>
          episodes.filter(compose(not, propEq('id', episodeId))),
        );
      } else {
        setEpisodes((episodes) =>
          episodes.map((item) => (item.id === episodeId ? episode : item)),
        );
      }
    },
    [upsertEpisode],
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
