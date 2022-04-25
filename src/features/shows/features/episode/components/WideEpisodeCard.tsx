import { Box, Tooltip } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import WideCard from '../../../components/card/WideCard';
import EllipsisButton from '../../../../../components/EllipsisButton';
import { EpisodeActionProps, EpisodeWithShowType } from '../types';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  episode: EpisodeWithShowType;
  actions?: React.JSXElementConstructor<EpisodeActionProps>[];
}

const WideEpisodeCard = ({
  episode,
  children,
  actions = [],
}: PropsWithChildren<Props>) => {
  if (episode.loading) {
    return <TallEpisodeCardPlaceholder />;
  }

  const title = `${episode.seasonNumber}x${episode.number}  - ${episode.name}`;

  return (
    <WideCard wideImage={episode.show.wideImage}>
      <Box sx={{ p: 0.5, display: 'flex' }}>
        <Tooltip title={title}>
          <EllipsisButton size="small">{title}</EllipsisButton>
        </Tooltip>
        {actions.map((Action) => (
          <Action key={episode.id} episode={episode} />
        ))}
      </Box>
      {children}
    </WideCard>
  );
};

export default WideEpisodeCard;
