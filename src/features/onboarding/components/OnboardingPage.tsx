import React from 'react';
import PageWrapper from '../../../components/PageWrapper';
import OnboardingProvider from '../contexts/OnboardingContext';
import VerticalStepper from './VerticalStepper';

const OnboardingPage = () => (
  <PageWrapper sx={{ paddingX: 8, paddingY: 2 }}>
    <OnboardingProvider>
      <VerticalStepper />
    </OnboardingProvider>
  </PageWrapper>
);

export default OnboardingPage;
