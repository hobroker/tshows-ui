import React from 'react';
import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import TallCardCollection from '../../../../shows/components/card/TallCardCollection';
import TallEpisodeCardPlaceholder from '../../../../shows/features/episode/components/TallEpisodeCardPlaceholder';
import TallEpisodeCard from '../../../../shows/features/episode/components/TallEpisodeCard';
import { EpisodeWithShowType } from '../../../../shows/features/episode/types';

interface Props {
  loading: boolean;
  episodes: Array<EpisodeWithShowType>;
}

const UpcomingEpisodesCollection = ({ episodes, loading }: Props) => (
  <TallCardCollection
    loading={loading}
    scroll
    PlaceholderComponent={TallEpisodeCardPlaceholder}
  >
    {episodes.map((episode) => (
      <Box key={episode.externalId}>
        <TallEpisodeCard
          episode={episode}
          topChildren={
            <Typography
              variant="subtitle2"
              sx={{ textAlign: 'center', fontWeight: 700 }}
            >
              {DateTime.fromISO(episode.airDate).toFormat('ccc, MMM d')}
            </Typography>
          }
        />
      </Box>
    ))}
  </TallCardCollection>
);

export default UpcomingEpisodesCollection;
