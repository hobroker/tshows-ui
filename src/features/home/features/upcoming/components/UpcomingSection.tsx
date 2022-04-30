import { useContext } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Section from '../../../../../components/Section';
import { UpcomingContext } from '../contexts/UpcomingContext';
import UpcomingEpisodesCollection from './UpcomingEpisodesCollection';

const UpcomingSection = () => {
  const { episodes, loading } = useContext(UpcomingContext);

  return (
    <Section title="Upcoming schedule" icon={<CalendarMonthIcon />}>
      <UpcomingEpisodesCollection episodes={episodes} loading={loading} />
    </Section>
  );
};

export default UpcomingSection;
