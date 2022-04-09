import { Box } from '@mui/material';
import { useCallback, useState } from 'react';
import { not } from 'rambda';
import { Episode, EpisodeShowFragment } from '../../../../../generated/graphql';
import TallCard from '../../../components/base/TallCard';
import EllipsisButton from '../../../../../components/EllipsisButton';
import UpsertEpisodeAction from './UpsertEpisodeAction';

interface Props {
  episode: Omit<Episode, 'show'> & {
    show: EpisodeShowFragment;
  };
}

const TallEpisodeCard = ({ episode }: Props) => {
  const [isWatched, setIsWatched] = useState(false);
  const toggleIsWatched = useCallback(() => setIsWatched(not), []);

  return (
    <TallCard tallImage={episode.show.tallImage}>
      <Box sx={{ p: 0.5, display: 'flex' }}>
        <EllipsisButton>
          {`${episode.seasonNumber}x${episode.number}`} - {episode.name}
        </EllipsisButton>
        <UpsertEpisodeAction
          isWatched={isWatched}
          episodeId={episode.id}
          toggleIsWatched={toggleIsWatched}
        />
      </Box>
    </TallCard>
  );
};

export default TallEpisodeCard;
