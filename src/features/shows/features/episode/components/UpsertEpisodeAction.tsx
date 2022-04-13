import { useCallback, useContext } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ActionButton from '../../../components/card/ActionButton';
import { UpNextContext } from '../../../../home/features/upnext/contexts/UpNextContext';
import { ActionProps } from '../types';

const UpsertEpisodeAction = ({ episode }: ActionProps) => {
  const { watchEpisode } = useContext(UpNextContext);
  const onWatchEpisode = useCallback(() => {
    watchEpisode(episode.id);
  }, [episode, watchEpisode]);

  return (
    <ActionButton
      size="small"
      tooltip="Mark as watched"
      onClick={onWatchEpisode}
    >
      {episode.isWatched ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
    </ActionButton>
  );
};

export default UpsertEpisodeAction;
