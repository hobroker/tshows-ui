import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const IndefiniteLoading = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress color="inherit" size={48} thickness={4} />
  </Box>
);

export default IndefiniteLoading;
