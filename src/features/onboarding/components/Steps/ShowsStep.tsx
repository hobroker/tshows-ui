import { Box, Typography } from '@mui/material';
import ShowsOnboarding from '../ShowsOnboarding';

const ShowsStep = () => (
  <Box>
    <Typography variant="body1" mb={1}>
      We found some popular items based on your favorite genres.
    </Typography>
    <ShowsOnboarding />
  </Box>
);

export default ShowsStep;
