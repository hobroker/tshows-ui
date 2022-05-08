import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import {
  amber,
  blue,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors';
import { useGetStatsGenresQuery } from '../../../../generated/graphql';
import IndefiniteLoading from '../../../../components/IndefiniteLoading';

const colors = [
  amber[500],
  blue[500],
  cyan[500],
  deepOrange[500],
  deepPurple[500],
  green[500],
  indigo[500],
  lightBlue[500],
  lightGreen[500],
  lime[500],
  orange[500],
  pink[500],
  purple[500],
  red[500],
  teal[500],
  yellow[500],
];

const StatsGenres = () => {
  const { data, loading } = useGetStatsGenresQuery();
  const items = data?.getStatsGenres || [];

  if (loading) {
    return <IndefiniteLoading />;
  }

  return (
    <ResponsivePie
      data={items}
      margin={{ top: 20, bottom: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={4}
      arcLabelsTextColor="#ffffff"
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsTextColor="#000000"
      arcLinkLabelsThickness={2}
      colors={colors}
      arcLinkLabelsColor={{ from: 'color' }}
      legends={[
        {
          translateY: 50,
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          itemWidth: 120,
          itemHeight: 24,
          itemTextColor: '#000000',
          itemDirection: 'left-to-right',
          symbolShape: 'circle',
        },
      ]}
    />
  );
};

export default StatsGenres;
