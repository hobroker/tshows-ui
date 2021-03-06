import { Box, Tooltip } from '@mui/material';
import React, { PropsWithChildren, ReactNode } from 'react';
import TallCard from '../../../components/card/TallCard';
import EllipsisButton from '../../../../../components/EllipsisButton';
import { EpisodeActionProps, EpisodeWithLoading } from '../types';
import { DynamicRoute } from '../../../../router/constants';
import { slugifyShow } from '../../../utils/slugify';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  episode: EpisodeWithLoading;
  actions?: React.JSXElementConstructor<EpisodeActionProps>[];
  topChildren?: ReactNode;
}

const TallEpisodeCard = ({
  episode,
  children,
  topChildren,
  actions = [],
}: PropsWithChildren<Props>) => {
  if (episode.loading) {
    return <TallEpisodeCardPlaceholder />;
  }

  const title = `${episode.seasonNumber}x${episode.number}  - ${episode.name}`;

  return (
    <TallCard
      tallImage={episode.show.tallImage}
      topChildren={topChildren}
      href={DynamicRoute.Show(slugifyShow(episode.show))}
    >
      <Box sx={{ p: 0.5, display: 'flex' }}>
        <Tooltip title={title}>
          <EllipsisButton size="small">{title}</EllipsisButton>
        </Tooltip>
        {actions.map((Action) => (
          <Action
            key={episode.id}
            isWatched={episode.isWatched}
            episodeId={episode.id}
          />
        ))}
      </Box>
      {children}
    </TallCard>
  );
};

export default TallEpisodeCard;
