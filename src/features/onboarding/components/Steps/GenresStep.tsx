import { Box, Typography } from '@mui/material';
import GenresOnboarding from '../GenresOnboarding';

const GenresStep = () => (
  <Box>
    <Typography variant="body1" mb={2}>
      This helps us make better TV recommendations for you.
    </Typography>
    <GenresOnboarding />
  </Box>
);

export default GenresStep;
