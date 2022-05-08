import React, { useContext } from 'react';
import { Box, Stack } from '@mui/material';
import Section from '../../../../components/Section';
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
      <Section title="Activity by day" divider>
        <Box sx={{ height: 200 }}>
          <StatsCalendar />
        </Box>
      </Section>
      <Section title="Activity by genres" divider>
        <Box sx={{ height: 400 }}>
          <StatsGenres />
        </Box>
      </Section>
    </Stack>
  );
};

export default StatsContent;
