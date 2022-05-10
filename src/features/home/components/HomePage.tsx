import React from 'react';
import { Box, Divider } from '@mui/material';
import PageWrapper from '../../../components/PageWrapper';
import StatsSummaryProvider from '../../stats/contexts/StatsSummaryContext';
import WhenLoggedIn from '../../user/components/WhenLoggedIn';
import WhenAnonymous from '../../user/components/WhenAnonymous';
import Upcoming from '../features/upcoming/components/Upcoming';
import UpNext from '../features/upnext/components/UpNext';
import StatsSummary from '../../stats/components/summary/StatsSummary';
import Trending from '../../shows/features/trending/components/section/Trending';
import Recommendations from '../../shows/features/discover/components/section/Recommendations';
import LoginAlert from './LoginAlert';

const HomePage = () => (
  <PageWrapper>
    <WhenAnonymous>
      <Box marginY={2}>
        <LoginAlert />
      </Box>
    </WhenAnonymous>
    <WhenLoggedIn>
      <StatsSummaryProvider>
        <StatsSummary />
        <UpNext />
      </StatsSummaryProvider>
      <Divider />
      <Upcoming />
      <Divider />
      <Recommendations />
      <Divider />
    </WhenLoggedIn>
    <Trending />
  </PageWrapper>
);

export default HomePage;
