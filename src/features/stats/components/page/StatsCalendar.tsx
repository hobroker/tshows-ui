import React, { useContext } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import { blue, grey } from '@mui/material/colors';
import { StatsContext } from '../../contexts/StatsContext';

const StatsCalendar = () => {
  const { calendar } = useContext(StatsContext);

  if (calendar.length < 2) {
    return null;
  }

  return (
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
  );
};

export default StatsCalendar;
