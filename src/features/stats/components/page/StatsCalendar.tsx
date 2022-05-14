import React, { useContext } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/material';
import { StatsContext } from '../../contexts/StatsContext';
import Section from '../../../../components/Section';

const StatsCalendar = () => {
  const { calendar } = useContext(StatsContext);

  if (calendar.length === 0) {
    return null;
  }

  return (
    <Section title="Activity by day" divider>
      <Box sx={{ height: 200 }}>
        <ResponsiveCalendar
          data={calendar}
          margin={{ left: 20 }}
          from={calendar[0].day}
          to={calendar[calendar.length - 1].day}
          emptyColor={grey[200]}
          monthBorderColor="#ffffff"
          colors={[blue[100], blue[300], blue[500], blue[700], blue[900]]}
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
        />
      </Box>
    </Section>
  );
};

export default StatsCalendar;
