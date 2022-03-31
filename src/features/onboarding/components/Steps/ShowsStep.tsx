import { Box, Typography } from '@mui/material';
import ShowsOnboarding from '../ShowsOnboarding';
import ShowPreferencesProvider from '../../contexts/ShowPreferencesContext';

const ShowsStep = () => (
  <ShowPreferencesProvider>
    <Box>
      <Typography variant="body1" mb={2}>
        We found some popular items based on your favorite genres.
      </Typography>
      <ShowsOnboarding />
    </Box>
  </ShowPreferencesProvider>
);

export default ShowsStep;
