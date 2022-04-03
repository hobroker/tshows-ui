import React, { useContext } from 'react';
import { ShowsOnboardingContext } from '../contexts/ShowsOnboardingContext';
import VerticalShowCardCollection from '../../shows/components/VerticalShowCardCollection';

const ShowsOnboarding = () => {
  const { shows, loading } = useContext(ShowsOnboardingContext);

  return <VerticalShowCardCollection shows={shows} loading={loading} />;
};

export default ShowsOnboarding;
