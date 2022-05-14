import React, { useContext } from 'react';
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
import { Box } from '@mui/material';
import { StatsContext } from '../../contexts/StatsContext';
import Section from '../../../../components/Section';

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
  const { genres } = useContext(StatsContext);

  return (
    <Section title="Activity by genres" divider>
      <Box sx={{ height: 400 }}>
        <ResponsivePie
          data={genres}
          margin={{ top: 30, bottom: 80 }}
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
      </Box>
    </Section>
  );
};

export default StatsGenres;
