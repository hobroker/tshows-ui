import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import { blue, grey } from '@mui/material/colors';
import IndefiniteLoading from '../../../../components/IndefiniteLoading';
import { useGetStatsCalendarQuery } from '../../../../generated/graphql';

const StatsCalendar = () => {
  const { data, loading } = useGetStatsCalendarQuery();
  const items = data?.getStatsCalendar || [];

  if (loading) {
    return <IndefiniteLoading />;
  }

  if (items.length < 2) {
    return null;
  }

  return (
    <ResponsiveCalendar
      data={items}
      margin={{ left: 20 }}
      from={items[0].day}
      to={items[items.length - 1].day}
      emptyColor={grey[200]}
      monthBorderColor="#ffffff"
      colors={[blue[100], blue[300], blue[500], blue[700], blue[900]]}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
    />
  );
};

export default StatsCalendar;
