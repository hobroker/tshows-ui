import React from 'react';
import PageWrapper from '../../../components/PageWrapper';
import HomeProvider from '../contexts/HomeContext';
import WhenLoggedIn from '../../user/components/WhenLoggedIn';
import UpNextSection from './UpNextSection';
import UpcomingSection from './UpcomingSection';

const HomePage = () => (
  <PageWrapper>
    <HomeProvider>
      <WhenLoggedIn>
        <UpNextSection />
        <UpcomingSection />
      </WhenLoggedIn>
    </HomeProvider>
  </PageWrapper>
);

export default HomePage;
