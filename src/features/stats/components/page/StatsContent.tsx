import React from 'react';
import { Box, Stack } from '@mui/material';
import StatsCalendarProvider from '../../contexts/StatsCalendarContext';
import Section from '../../../../components/Section';
import StatsCalendar from './StatsCalendar';

const StatsContent = () => (
  <Stack>
    <Section title="Activity by day">
      <Box sx={{ height: 200 }}>
        <StatsCalendarProvider>
          <StatsCalendar />
        </StatsCalendarProvider>
      </Box>
    </Section>
  </Stack>
);

export default StatsContent;
