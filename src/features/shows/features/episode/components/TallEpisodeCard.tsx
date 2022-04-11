import { Box, Tooltip } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import TallCard from '../../../components/base/TallCard';
import EllipsisButton from '../../../../../components/EllipsisButton';
import { ActionProps, EpisodeType } from '../types';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  episode: EpisodeType;
  actions?: React.JSXElementConstructor<ActionProps>[];
}

const TallEpisodeCard = ({
  episode,
  children,
  actions = [],
}: PropsWithChildren<Props>) => {
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
      {children}
    </TallCard>
  );
};

export default TallEpisodeCard;
