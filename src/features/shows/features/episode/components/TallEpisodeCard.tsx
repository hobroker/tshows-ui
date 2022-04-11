import { Box, Tooltip } from '@mui/material';
import React from 'react';
import TallCard from '../../../components/base/TallCard';
import EllipsisButton from '../../../../../components/EllipsisButton';
import { ActionProps } from '../types';
import type { EpisodeType } from '../../../../home/contexts/types';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  episode: EpisodeType;
  actions: React.JSXElementConstructor<ActionProps>[];
}

const TallEpisodeCard = ({ episode, actions }: Props) => {
  if (episode.loading) {
    return <TallEpisodeCardPlaceholder />;
  }

  const title = `${episode.seasonNumber}x${episode.number}  - ${episode.name}`;

  return (
    <TallCard tallImage={episode.show.tallImage}>
      <Box sx={{ p: 0.5, display: 'flex' }}>
        <Tooltip title={title}>
          <EllipsisButton size="small">{title}</EllipsisButton>
        </Tooltip>
        {actions.map((Action) => (
          <Action key={episode.id} episode={episode} />
        ))}
      </Box>
    </TallCard>
  );
};

export default TallEpisodeCard;
