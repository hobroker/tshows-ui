import { Box, Typography } from '@mui/material';
import GenresOnboarding from '../GenresOnboarding';
import GenresProvider from '../../../genres/contexts/GenresContext';

const GenresStep = () => (
  <GenresProvider>
    <Box>
      <Typography variant="body1" mb={2}>
        This helps us make better TV recommendations for you.
      </Typography>
      <GenresOnboarding />
    </Box>
  </GenresProvider>
);

export default GenresStep;
