import { Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { Episode, EpisodeShowFragment } from '../../../../../generated/graphql';
import TallCard from '../../../components/base/TallCard';
import ActionButton from '../../../components/base/ActionButton';
import EpisodeWatchedAction from './EpisodeWatchedAction';

interface Props {
  episode: Omit<Episode, 'show'> & {
    show: EpisodeShowFragment;
  };
}

const TallEpisodeCard = ({ episode }: Props) => {
  const [isWatched, setIsWatched] = useState(false);
  const onMarkAsWatched = () => {
    console.log('Mark as watched', episode.id);
    setIsWatched(true);
  };

  return (
    <TallCard tallImage={episode.show.tallImage}>
      <Box sx={{ p: 0.5, display: 'flex' }}>
        <EpisodeWatchedAction isWatched={episode.isWatched}>
          {`${episode.seasonNumber}x${episode.number}`} - {episode.name}
        </EpisodeWatchedAction>
        <ActionButton
          size="small"
          tooltip="Mark as watched"
          onClick={onMarkAsWatched}
        >
          {isWatched ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
        </ActionButton>
      </Box>
    </TallCard>
  );
};

export default TallEpisodeCard;
