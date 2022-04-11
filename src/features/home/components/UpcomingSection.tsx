import { useContext } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TallEpisodeCollection from '../../shows/features/episode/components/TallEpisodeCollection';
import { UpcomingContext } from '../contexts/UpcomingContext';
import Section from './Section';

const UpcomingSection = () => {
  const { episodes, loading } = useContext(UpcomingContext);

  return (
    <Section title="Upcoming schedule" icon={<CalendarMonthIcon />}>
      <TallEpisodeCollection episodes={episodes} loading={loading} />
    </Section>
  );
};

export default UpcomingSection;
