import React, { useContext } from 'react';
import { ShowsOnboardingContext } from '../contexts/ShowsOnboardingContext';
import TallShowCardCollection from '../../shows/components/TallShowCardCollection';

const ShowsOnboarding = () => {
  const { shows, loading } = useContext(ShowsOnboardingContext);

  return <TallShowCardCollection shows={shows} loading={loading} />;
};

export default ShowsOnboarding;
