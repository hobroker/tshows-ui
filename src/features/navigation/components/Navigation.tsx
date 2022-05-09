import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavigationProvider from '../contexts/NavigationContext';
import LogoText from '../../logo/components/LogoText';
import { StaticRoute } from '../../router/constants';
import SearchProvider from '../../search/contexts/SearchContext';
import Search from '../../search/components/Search';
import WhenLoggedIn from '../../user/components/WhenLoggedIn';
import ElevationScroll from './ElevationScroll';
import UserItem from './UserItem/UserItem';
import Notifications from './Notifications';

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Navigation = () => (
  <NavigationProvider>
    <ElevationScroll>
      <StyledAppBar elevation={1}>
        <Toolbar sx={{ px: { xs: 1.5 } }}>
          <Box sx={{ mr: 1.5 }}>
            <Button href="/" sx={{ paddingY: 1.75 }} size="large">
              <LogoText sx={{ width: 150 }} />
            </Button>
          </Box>
          <Box sx={{ mr: 1, flexGrow: 1 }}>
            <SearchProvider>
              <Search />
            </SearchProvider>
          </Box>
          <Box>
            <Button href={StaticRoute.Trending}>Trending</Button>
            <WhenLoggedIn>
              <Button href={StaticRoute.MyShows}>My Shows</Button>
            </WhenLoggedIn>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <WhenLoggedIn>
              <Notifications />
            </WhenLoggedIn>
            <UserItem />
          </Box>
        </Toolbar>
      </StyledAppBar>
    </ElevationScroll>
  </NavigationProvider>
);

export default Navigation;
