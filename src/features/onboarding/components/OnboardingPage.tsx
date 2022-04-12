import React from 'react';
import type { TypographyProps } from '@mui/material';
import { Box, Typography } from '@mui/material';
import PageWrapper from '../../../components/PageWrapper';
import LogoText from '../../logo/components/LogoText';
import GenresStep from './Steps/GenresStep';
import ShowsStep from './Steps/ShowsStep';

const Title = ({ ...props }: TypographyProps) => (
  <Typography variant="h5" mb={0.5} {...props} />
);

const OnboardingPage = () => (
  <PageWrapper sx={{ mt: 2 }}>
    <Box mb={2}>
      <Title variant="h4">
        <Box sx={{ display: 'flex' }}>
          Welcome to
          <LogoText sx={{ height: 43, py: 1, ml: 0.5 }} />
        </Box>
      </Title>
    </Box>
    <Box mb={2}>
      <Title>Select your favorite genres</Title>
      <GenresStep />
    </Box>
    <Box mb={2}>
      <Title>Add some TV Shows to your profile</Title>
      <ShowsStep />
    </Box>
  </PageWrapper>
);

export default OnboardingPage;
