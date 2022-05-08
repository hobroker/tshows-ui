import RecommendationsProvider from '../../contexts/RecommendationsContext';
import RecommendationsSection from './RecommendationsSection';

const Recommendations = () => (
  <RecommendationsProvider>
    <RecommendationsSection />
  </RecommendationsProvider>
);

export default Recommendations;
