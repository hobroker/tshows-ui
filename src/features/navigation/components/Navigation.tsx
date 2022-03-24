import * as React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ElevationScroll from './ElevationScroll';
import Search from './Search';
import NotificationsBadge from './NotificationsBadge';
import NavigationProvider from '../contexts/NavigationContext';
import Logo from '../../logo/components/Logo';

const LoginButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1, 1, 2),
  padding: theme.spacing(0.5, 2),
}));

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
            <LoginButton href="/login" color="secondary" variant="contained">
              Login
            </LoginButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  </NavigationProvider>
);

export default Navigation;
