import { Container } from '@mui/material';
import ReviewsSection from '../../review/components/ReviewsSection';
import ReviewProvider from '../../review/contexts/ReviewContext';
import SeasonsSection from './seasons/SeasonsSection';

const ShowContent = () => (
  <Container>
    <ReviewProvider>
      <ReviewsSection />
    </ReviewProvider>
    <SeasonsSection />
  </Container>
);

export default ShowContent;
