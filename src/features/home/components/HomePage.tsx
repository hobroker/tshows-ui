import React from 'react';
import PageWrapper from '../../../components/PageWrapper';
import WhenLoggedIn from '../../user/components/WhenLoggedIn';
import Upcoming from '../features/upcoming/components/Upcoming';
import UpNext from '../features/upnext/components/UpNext';

const HomePage = () => (
  <PageWrapper>
    <WhenLoggedIn>
      <UpNext />
      <Upcoming />
    </WhenLoggedIn>
  </PageWrapper>
);

export default HomePage;
