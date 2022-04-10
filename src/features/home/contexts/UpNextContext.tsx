import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { assoc, propEq } from 'rambda/immutable';
import { noop, replaceListItem, updateListItem } from '../../../utils/fp';
import {
  Episode,
  EpisodeShowFragment,
  useListUpNextLazyQuery,
  useUpsertEpisodeMutation,
} from '../../../generated/graphql';
import useOnMount from '../../../hooks/useOnMount';

export type EpisodeType = Omit<Episode, 'show'> & {
  show: EpisodeShowFragment;
  loading?: boolean;
};

interface ContextType {
  episodes: EpisodeType[];
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
  const [fetchUpNextEpisodes, { loading }] = useListUpNextLazyQuery();
  const [upsertEpisode] = useUpsertEpisodeMutation();
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

  const watchEpisode = useCallback(
    async (episodeId: number) => {
      setEpisodes(beforeEpisodeUpdate(episodeId));

      const { data } = await upsertEpisode({ variables: { episodeId } });

      const episode = data?.upsertEpisode;

      setEpisodes((episodes) =>
        replaceListItem(propEq('id', episodeId), episode, episodes).filter(
          Boolean,
        ),
      );
    },
    [upsertEpisode],
  );

  useOnMount(async () => {
    const { data } = await fetchUpNextEpisodes();

    if (data?.listUpNext) {
      setEpisodes(data.listUpNext);
    }
  });

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
