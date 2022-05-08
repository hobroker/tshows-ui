import React from 'react';
import { Box, Divider } from '@mui/material';
import PageWrapper from '../../../components/PageWrapper';
import WhenLoggedIn from '../../user/components/WhenLoggedIn';
import Upcoming from '../features/upcoming/components/Upcoming';
import UpNext from '../features/upnext/components/UpNext';
import WhenAnonymous from '../../user/components/WhenAnonymous';
import StatsSummary from '../../stats/components/summary/StatsSummary';
import StatsSummaryProvider from '../../stats/contexts/StatsSummaryContext';
import Trending from '../../shows/features/trending/components/section/Trending';
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
      <Trending />
    </WhenLoggedIn>
  </PageWrapper>
);

export default HomePage;
