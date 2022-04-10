import { Box, Tooltip } from '@mui/material';
import { useCallback, useState } from 'react';
import { not } from 'rambda';
import TallCard from '../../../components/base/TallCard';
import EllipsisButton from '../../../../../components/EllipsisButton';
import type { EpisodeType } from '../../../../home/contexts/UpNextContext';
import UpsertEpisodeAction from './UpsertEpisodeAction';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  episode: EpisodeType;
}

const TallEpisodeCard = ({ episode }: Props) => {
  const [isWatched, setIsWatched] = useState(false);
  const toggleIsWatched = useCallback(() => setIsWatched(not), []);
  const title = `${episode.seasonNumber}x${episode.number}  - ${episode.name}`;

  if (episode.loading) {
    return <TallEpisodeCardPlaceholder />;
  }

  return (
    <TallCard tallImage={episode.show.tallImage}>
      <Box sx={{ p: 0.5, display: 'flex' }}>
        <Tooltip title={title}>
          <EllipsisButton size="small" variant="outlined">
            {title}
          </EllipsisButton>
        </Tooltip>
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
