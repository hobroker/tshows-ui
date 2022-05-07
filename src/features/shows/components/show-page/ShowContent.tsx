import { Container } from '@mui/material';
import ReviewsSection from '../../../review/components/ReviewsSection';
import ReviewProvider from '../../../review/contexts/ReviewContext';
import SimilarShowsSection from '../../features/similar/components/SimilarShowsSection';
import SimilarShowsProvider from '../../features/similar/contexts/SimilarShowsContext';
import SeasonsSection from './seasons/SeasonsSection';

const ShowContent = () => (
  <Container>
    <SeasonsSection />
    <ReviewProvider>
      <ReviewsSection />
    </ReviewProvider>
    <SimilarShowsProvider>
      <SimilarShowsSection />
    </SimilarShowsProvider>
  </Container>
);

export default ShowContent;
