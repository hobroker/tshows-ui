import React from 'react';
import Typography from '@mui/material/Typography';
import { DateTime } from 'luxon';
import { Box, Divider } from '@mui/material';
import { Season } from '../../../../../generated/graphql';
import CustomImage from '../../CustomImage';
import SeasonWatchedButton from './SeasonWatchedButton';

interface Props {
  season: Season;
}

const SeasonSummary = ({
  season: {
    description,
    airDate,
    name,
    tallImage,
    episodeCount,
    isFullyWatched,
    number,
  },
}: Props) => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    <CustomImage path={tallImage} sx={{ width: 80 }} />
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1">{name}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {DateTime.fromISO(airDate).toFormat('d MMM, yyyy')}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {episodeCount} episodes
        </Typography>
        <Box sx={{ ml: 'auto' }}>
          <SeasonWatchedButton
            seasonNumber={number}
            isFullyWatched={isFullyWatched}
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default SeasonSummary;
