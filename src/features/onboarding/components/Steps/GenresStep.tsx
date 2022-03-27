import { Box, Typography } from '@mui/material';
import GenresOnboarding from '../GenresOnboarding';
import GenresToggle from './GenresToggle';

const GenresStep = () => (
  <Box>
    <Typography variant="body1" mb={1}>
      This helps us make better TV recommendations for you.
    </Typography>
    <GenresOnboarding />
  </Box>
);

export default GenresStep;
