import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export enum IndefiniteLoadingSize {
  small = 24,
  large = 48,
}

interface Props {
  size?: IndefiniteLoadingSize;
}

const IndefiniteLoading = ({ size = IndefiniteLoadingSize.large }: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress color="inherit" size={size} thickness={4} />
  </Box>
);

export default IndefiniteLoading;
