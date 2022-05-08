import StatsProvider from '../../contexts/StatsContext';
import PageWrapper from '../../../../components/PageWrapper';
import StatsSummaryProvider from '../../contexts/StatsSummaryContext';
import StatsContent from './StatsContent';
import StatsPageSummary from './StatsPageSummary';

const StatsPage = () => (
  <PageWrapper>
    <StatsSummaryProvider>
      <StatsPageSummary />
    </StatsSummaryProvider>
    <StatsProvider>
      <StatsContent />
    </StatsProvider>
  </PageWrapper>
);

export default StatsPage;
