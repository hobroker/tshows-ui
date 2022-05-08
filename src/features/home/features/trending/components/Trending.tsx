import TrendingProvider from '../contexts/TrendingContext';
import TrendingSection from './TrendingSection';

const Trending = () => (
  <TrendingProvider>
    <TrendingSection />
  </TrendingProvider>
);

export default Trending;
