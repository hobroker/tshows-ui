import TrendingProvider from '../../contexts/TrendingContext';
import PageWrapper from '../../../../../../components/PageWrapper';
import TrendingContent from './TrendingContent';

const TrendingPage = () => (
  <PageWrapper>
    <TrendingProvider>
      <TrendingContent />
    </TrendingProvider>
  </PageWrapper>
);

export default TrendingPage;
