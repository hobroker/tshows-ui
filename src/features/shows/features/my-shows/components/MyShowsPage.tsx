import PageWrapper from '../../../../../components/PageWrapper';
import MyShowsProvider from '../contexts/MyShowsContext';
import MyShowsContent from './MyShowsContent';

const MyShowsPage = () => (
  <PageWrapper>
    <MyShowsProvider>
      <MyShowsContent />
    </MyShowsProvider>
  </PageWrapper>
);

export default MyShowsPage;
