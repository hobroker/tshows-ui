import UpNextProvider from '../contexts/UpNextContext';
import UpNextSection from './UpNextSection';

const UpNext = () => (
  <UpNextProvider>
    <UpNextSection />
  </UpNextProvider>
);

export default UpNext;
