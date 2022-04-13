import React from 'react';
import type { TypographyProps } from '@mui/material';
import { Box, Typography } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MovieIcon from '@mui/icons-material/Movie';
import { styled } from '@mui/material/styles';
import PageWrapper from '../../../components/PageWrapper';
import GenresStep from './Steps/GenresStep';
import ShowsStep from './Steps/ShowsStep';

const Title = styled(({ ...props }: TypographyProps) => (
  <Typography variant="h5" mb={0.5} {...props} />
))`
  display: flex;
  align-items: center;
`;

const OnboardingPage = () => (
  <PageWrapper sx={{ mt: 2 }}>
    <Box mb={2}>
      <Title variant="h4">Let's personalize your profile</Title>
    </Box>
    <Box mb={2}>
      <Title>
        <FormatListBulletedIcon color="primary" sx={{ mr: 1 }} />
        Select your favorite genres
      </Title>
      <GenresStep />
    </Box>
    <Box mb={2}>
      <Title>
        <MovieIcon color="primary" sx={{ mr: 1 }} />
        Add some TV Shows to your profile
      </Title>
      <ShowsStep />
    </Box>
  </PageWrapper>
);

export default OnboardingPage;
