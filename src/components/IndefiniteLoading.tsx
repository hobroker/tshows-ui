import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export enum IndefiniteLoadingSize {
  Small = 24,
  Large = 48,
}

interface Props {
  size?: IndefiniteLoadingSize;
}

const IndefiniteLoading = ({ size = IndefiniteLoadingSize.Large }: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress color="inherit" size={size} thickness={4} />
  </Box>
);

export default IndefiniteLoading;
