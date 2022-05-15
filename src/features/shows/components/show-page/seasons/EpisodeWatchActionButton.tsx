import React, { useCallback, useContext } from 'react';
import UpsertEpisodeAction from '../../../features/episode/components/UpsertEpisodeAction';
import { ShowPageContext } from '../../../contexts/ShowPageContext';

interface Props {
  seasonNumber: number;
  episodeId: number;
  isWatched: boolean;
}

const EpisodeWatchActionButton = ({
  seasonNumber,
  episodeId,
  isWatched,
}: Props) => {
  const { toggleEpisodeIsWatched } = useContext(ShowPageContext);
  const onWatchEpisode = useCallback(() => {
    toggleEpisodeIsWatched(seasonNumber, episodeId, !isWatched);
  }, [episodeId, isWatched, seasonNumber, toggleEpisodeIsWatched]);

  return (
    <UpsertEpisodeAction
      size="large"
      onClick={onWatchEpisode}
      isWatched={isWatched}
    />
  );
};

export default EpisodeWatchActionButton;
