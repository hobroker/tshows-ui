import { useContext } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { TrendingContext } from '../contexts/TrendingContext';
import Section from '../../../../../components/Section';
import ShowsCollection from '../../../../shows/components/ShowsCollection';

const TrendingSection = () => {
  const { shows, loading } = useContext(TrendingContext);

  return (
    <Section title="Trending" icon={<TrendingUpIcon />}>
      <ShowsCollection shows={shows} loading={loading} scroll />
    </Section>
  );
};

export default TrendingSection;
