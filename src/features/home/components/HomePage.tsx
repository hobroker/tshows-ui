import React from 'react';
import { Box, Divider } from '@mui/material';
import PageWrapper from '../../../components/PageWrapper';
import WhenLoggedIn from '../../user/components/WhenLoggedIn';
import Upcoming from '../features/upcoming/components/Upcoming';
import UpNext from '../features/upnext/components/UpNext';
import WhenAnonymous from '../../user/components/WhenAnonymous';
import StatsSummary from '../../stats/components/summary/StatsSummary';
import LoginAlert from './LoginAlert';

const HomePage = () => (
  <PageWrapper>
    <WhenAnonymous>
      <Box marginY={2}>
        <LoginAlert />
      </Box>
    </WhenAnonymous>
    <WhenLoggedIn>
      <StatsSummary />
      <UpNext />
      <Divider />
      <Upcoming />
    </WhenLoggedIn>
  </PageWrapper>
);

export default HomePage;
