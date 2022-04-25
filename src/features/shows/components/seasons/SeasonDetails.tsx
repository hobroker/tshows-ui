import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EpisodeWithoutShow } from '../../features/episode/types';
import { makeWideSmImage } from '../../utils/image';

const StyledImage = styled('img')`
  aspect-ratio: 3/2;
  width: 160px;
  object-fit: cover;
`;

interface Props {
  episodes: EpisodeWithoutShow[];
}

const SeasonDetails = ({ episodes }: Props) => {
  console.log('episodes', episodes);

  return (
    <Box>
      {episodes.map(({ id, wideImage }) => (
        <Box key={id}>
          <StyledImage src={makeWideSmImage(wideImage || '')} />
          <Typography variant="h6">{id}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SeasonDetails;
