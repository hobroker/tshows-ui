import React, { useContext } from 'react';
import { ShowsOnboardingContext } from '../contexts/ShowsOnboardingContext';
import TallShowCollection from '../../shows/components/TallShowCollection';

const ShowsOnboarding = () => {
  const { shows, loading } = useContext(ShowsOnboardingContext);

  return <TallShowCollection shows={shows} loading={loading} />;
};

export default ShowsOnboarding;
