import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const StyledHeadingBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
}

const StepHeader = ({ title, subtitle }: Props) => (
  <StyledHeadingBox>
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h3" sx={{ whiteSpace: 'nowrap', display: 'flex' }}>
        {title}
      </Typography>
    </Box>
    <div>
      <Typography variant="h5">{subtitle}</Typography>
    </div>
  </StyledHeadingBox>
);

export default StepHeader;
