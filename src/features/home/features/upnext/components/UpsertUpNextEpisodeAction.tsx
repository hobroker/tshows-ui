import { useCallback, useContext } from 'react';
import { UpNextContext } from '../contexts/UpNextContext';
import UpsertEpisodeAction from '../../../../shows/features/episode/components/UpsertEpisodeAction';
import { EpisodeActionProps } from '../../../../shows/features/episode/types';

const UpsertUpNextEpisodeAction = ({
  episodeId,
  isWatched,
}: EpisodeActionProps) => {
  const { watchEpisode } = useContext(UpNextContext);
  const onWatchEpisode = useCallback(() => {
    watchEpisode(episodeId);
  }, [episodeId, watchEpisode]);

  return <UpsertEpisodeAction isWatched={isWatched} onClick={onWatchEpisode} />;
};

export default UpsertUpNextEpisodeAction;
