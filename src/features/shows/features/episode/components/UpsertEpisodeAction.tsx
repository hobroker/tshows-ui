import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useCallback, useContext } from 'react';
import ActionButton from '../../../components/base/ActionButton';
import { UpNextContext } from '../../../../home/contexts/UpNextContext';

interface Props {
  isWatched: boolean;
  episodeId: number;
  toggleIsWatched: () => void;
}

const UpsertEpisodeAction = ({
  isWatched,
  toggleIsWatched,
  episodeId,
}: Props) => {
  const { watchEpisode } = useContext(UpNextContext);
  const onWatchEpisode = useCallback(() => {
    toggleIsWatched();
    watchEpisode(episodeId);
  }, [episodeId, toggleIsWatched, watchEpisode]);

  return (
    <ActionButton
      size="small"
      tooltip="Mark as watched"
      onClick={onWatchEpisode}
    >
      {isWatched ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
    </ActionButton>
  );
};

export default UpsertEpisodeAction;
