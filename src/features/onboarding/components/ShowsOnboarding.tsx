import React, { useContext } from 'react';
import { ShowsOnboardingContext } from '../contexts/ShowsOnboardingContext';
import OnboardingShowsCollection from './OnboardingShowsCollection';

const ShowsOnboarding = () => {
  const { shows, loading } = useContext(ShowsOnboardingContext);

  return <OnboardingShowsCollection shows={shows} loading={loading} />;
};

export default ShowsOnboarding;
