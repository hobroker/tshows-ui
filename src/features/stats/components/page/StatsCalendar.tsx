import React, { useContext } from 'react';
import { ResponsiveCalendarCanvas } from '@nivo/calendar';
import { blue, grey } from '@mui/material/colors';
import { StatsCalendarContext } from '../../contexts/StatsCalendarContext';
import IndefiniteLoading from '../../../../components/IndefiniteLoading';

const StatsCalendar = () => {
  const { data, loading } = useContext(StatsCalendarContext);

  if (loading) {
    return <IndefiniteLoading />;
  }

  if (data.length < 2) {
    return null;
  }

  return (
    <ResponsiveCalendarCanvas
      data={data}
      from={data[0].day}
      to={data[data.length - 1].day}
      emptyColor={grey[200]}
      colors={[blue[100], blue[300], blue[500], blue[700], blue[900]]}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
    />
  );
};

export default StatsCalendar;
