import React from 'react';
import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import TallCardCollection from '../../../../shows/components/base/TallCardCollection';
import TallEpisodeCardPlaceholder from '../../../../shows/features/episode/components/TallEpisodeCardPlaceholder';
import TallEpisodeCard from '../../../../shows/features/episode/components/TallEpisodeCard';
import { EpisodeType } from '../../../../shows/features/episode/types';

interface Props {
  loading: boolean;
  episodes: Array<EpisodeType>;
}

const UpcomingEpisodesCollection = ({ episodes, loading }: Props) => (
  <TallCardCollection
    loading={loading}
    scroll
    PlaceholderComponent={TallEpisodeCardPlaceholder}
  >
    {episodes.map((episode) => (
      <Box key={episode.externalId}>
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          {DateTime.fromISO(episode.airDate).toFormat('ccc, MMM d')}
        </Typography>
        <TallEpisodeCard episode={episode} />
      </Box>
    ))}
  </TallCardCollection>
);

export default UpcomingEpisodesCollection;
