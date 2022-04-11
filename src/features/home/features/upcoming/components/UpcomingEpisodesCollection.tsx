import React from 'react';
import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { styled } from '@mui/material/styles';
import TallCardCollection from '../../../../shows/components/base/TallCardCollection';
import TallEpisodeCardPlaceholder from '../../../../shows/features/episode/components/TallEpisodeCardPlaceholder';
import TallEpisodeCard from '../../../../shows/features/episode/components/TallEpisodeCard';
import { EpisodeType } from '../../../../shows/features/episode/types';

const StyledTallCardCollection = styled(TallCardCollection)``;

interface Props {
  loading: boolean;
  episodes: Array<EpisodeType>;
}

const UpcomingEpisodesCollection = ({ episodes, loading }: Props) => (
  <StyledTallCardCollection
    loading={loading}
    scroll
    PlaceholderComponent={TallEpisodeCardPlaceholder}
  >
    {episodes.map((episode) => (
      <>
        <Box className="date">
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {DateTime.fromISO(episode.airDate).toFormat('ccc, MMM d')}
          </Typography>
        </Box>
        <TallEpisodeCard key={episode.externalId} episode={episode} />
      </>
    ))}
  </StyledTallCardCollection>
);

export default UpcomingEpisodesCollection;
