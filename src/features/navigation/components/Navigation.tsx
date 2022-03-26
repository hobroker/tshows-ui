import * as React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import ElevationScroll from './ElevationScroll';
import Search from './Search';
import NotificationsBadge from './NotificationsBadge';
import NavigationProvider from '../contexts/NavigationContext';
import Logo from '../../logo/components/Logo';
import UserItem from './UserItem/UserItem';

const Navigation = () => (
  <NavigationProvider>
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Box>
            <Button href="/" sx={{ padding: 0 }}>
              <Logo />
            </Button>
          </Box>
          <Search />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <NotificationsBadge />
            <Box width={96}>
              <UserItem />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  </NavigationProvider>
);

export default Navigation;
