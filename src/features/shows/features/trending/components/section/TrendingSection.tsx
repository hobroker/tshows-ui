import React, { useContext } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TrendingContext } from '../../contexts/TrendingContext';
import Section from '../../../../../../components/Section';
import ShowsCollection from '../../../../components/ShowsCollection';
import { StaticRoute } from '../../../../../router/constants';

const TrendingSection = () => {
  const { shows, loading } = useContext(TrendingContext);

  return (
    <Section
      title="Trending"
      icon={<TrendingUpIcon />}
      afterTitle={
        <Button
          size="small"
          href={StaticRoute.Trending}
          sx={{ ml: 'auto' }}
          endIcon={<ArrowForwardIosIcon />}
        >
          View More
        </Button>
      }
      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <ShowsCollection shows={shows} loading={loading} scroll />
    </Section>
  );
};

export default TrendingSection;
