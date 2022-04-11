import UpcomingProvider from '../contexts/UpcomingContext';
import UpcomingSection from './UpcomingSection';

const Upcoming = () => (
  <UpcomingProvider>
    <UpcomingSection />
  </UpcomingProvider>
);

export default Upcoming;
