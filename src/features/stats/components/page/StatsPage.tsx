import StatsProvider from '../../contexts/StatsContext';
import PageWrapper from '../../../../components/PageWrapper';
import StatsContent from './StatsContent';

const StatsPage = () => (
  <PageWrapper>
    <StatsProvider>
      <StatsContent />
    </StatsProvider>
  </PageWrapper>
);

export default StatsPage;
