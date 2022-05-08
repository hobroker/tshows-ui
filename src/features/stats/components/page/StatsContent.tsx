import React from 'react';
import { Box, Stack } from '@mui/material';
import Section from '../../../../components/Section';
import StatsCalendar from './StatsCalendar';
import StatsGenres from './StatsGenres';

const StatsContent = () => (
  <Stack>
    <Section title="Activity by day">
      <Box sx={{ height: 200 }}>
        <StatsCalendar />
      </Box>
    </Section>
    <Section title="Activity by genres">
      <Box sx={{ height: 400 }}>
        <StatsGenres />
      </Box>
    </Section>
  </Stack>
);

export default StatsContent;
