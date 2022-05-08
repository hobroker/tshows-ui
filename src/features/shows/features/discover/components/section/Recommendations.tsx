import RecommendationsSectionProvider from '../../contexts/RecommendationsSectionContext';
import RecommendationsSection from './RecommendationsSection';

const Recommendations = () => (
  <RecommendationsSectionProvider>
    <RecommendationsSection />
  </RecommendationsSectionProvider>
);

export default Recommendations;
