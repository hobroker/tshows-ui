import React from 'react';
import Typography from '@mui/material/Typography';
import { DateTime } from 'luxon';
import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Season } from '../../../../generated/graphql';
import { makeTallSmImage } from '../../utils/image';

const StyledImage = styled('img')`
  aspect-ratio: 2/3;
  width: 80px;
  object-fit: cover;
`;

interface Props {
  season: Season;
}

const SeasonSummary = ({
  season: { description, airDate, name, tallImage, episodeCount },
}: Props) => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    <StyledImage src={makeTallSmImage(tallImage)} />
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
