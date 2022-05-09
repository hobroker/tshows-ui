import {
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
} from '@mui/material';
import React, { useContext } from 'react';
import { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavigationContext } from '../contexts/NavigationContext';

const Notifications = () => {
  const { notifications } = useContext(NavigationContext);
  const notificationsCount = notifications.length;
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'notifications',
  });

  return (
    <>
      <Box sx={{ marginTop: 0.5 }}>
        <IconButton size="large" {...bindTrigger(popupState)}>
          <Badge badgeContent={notificationsCount} color="secondary">
            <NotificationsIcon color="primary" />
          </Badge>
        </IconButton>
      </Box>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <List sx={{ maxWidth: '100%', width: 300 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default Notifications;
