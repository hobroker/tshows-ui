import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Sx } from '../utils/types';

export enum IndefiniteLoadingSize {
  Small = 24,
  Large = 48,
}

interface Props {
  size?: IndefiniteLoadingSize;
  sx?: Sx;
}

const IndefiniteLoading = ({
  size = IndefiniteLoadingSize.Large,
  sx,
}: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
    <CircularProgress color="inherit" size={size} thickness={4} />
  </Box>
);

export default IndefiniteLoading;
