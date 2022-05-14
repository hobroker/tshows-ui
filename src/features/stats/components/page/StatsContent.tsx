import React, { useContext } from 'react';
import { Stack } from '@mui/material';
import { StatsContext } from '../../contexts/StatsContext';
import IndefiniteLoading from '../../../../components/IndefiniteLoading';
import StatsCalendar from './StatsCalendar';
import StatsGenres from './StatsGenres';

const StatsContent = () => {
  const { loading } = useContext(StatsContext);

  if (loading) {
    return <IndefiniteLoading />;
  }

  return (
    <Stack>
      <StatsCalendar />
      <StatsGenres />
    </Stack>
  );
};

export default StatsContent;
