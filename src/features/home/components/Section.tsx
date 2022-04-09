import { PropsWithChildren } from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
}

const Section = ({ title, children }: PropsWithChildren<Props>) => (
  <Box sx={{ width: '100%' }}>
    <Typography variant="h5" sx={{ mb: 1 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

export default Section;
