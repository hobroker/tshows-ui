import { Box, Typography } from '@mui/material';
import ShowsOnboarding from '../ShowsOnboarding';
import ShowsOnboardingProvider from '../../contexts/ShowsOnboardingContext';
import PartialWatchlistProvider from '../../../watchlist/contexts/PartialWatchlistContext';

const ShowsStep = () => (
  <ShowsOnboardingProvider>
    <PartialWatchlistProvider>
      <Box>
        <Typography variant="body1" mb={2}>
          We found some popular items based on your favorite genres.
        </Typography>
        <ShowsOnboarding />
      </Box>
    </PartialWatchlistProvider>
  </ShowsOnboardingProvider>
);

export default ShowsStep;
