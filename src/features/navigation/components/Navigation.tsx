import * as React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavigationProvider from '../contexts/NavigationContext';
import LogoText from '../../logo/components/LogoText';
import ElevationScroll from './ElevationScroll';
import Search from './Search';
import NotificationsBadge from './NotificationsBadge';
import UserItem from './UserItem/UserItem';

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Navigation = () => (
  <NavigationProvider>
    <ElevationScroll>
      <StyledAppBar>
        <Toolbar>
          <Box sx={{ mr: 1.5 }}>
            <Button href="/" sx={{ paddingY: 1.75 }} size="large">
              <LogoText sx={{ width: 150 }} />
            </Button>
          </Box>
          <Box sx={{ mr: 1, width: '100%' }}>
            <Search />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <NotificationsBadge />
            <UserItem />
          </Box>
        </Toolbar>
      </StyledAppBar>
    </ElevationScroll>
  </NavigationProvider>
);

export default Navigation;
