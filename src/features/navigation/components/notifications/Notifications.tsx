import { Badge, Box, IconButton, List, Popover } from '@mui/material';
import React, { useContext } from 'react';
import { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationsContext } from '../../contexts/NotificationsContext';
import NotificationsContent from './NotificationsContent';
import NotificationsHeader from './NotificationsHeader';

const Notifications = () => {
  const { notifications } = useContext(NotificationsContext);
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
        <List sx={{ maxWidth: '100%', width: 300, maxHeight: 600 }}>
          <NotificationsHeader />
          <NotificationsContent />
        </List>
      </Popover>
    </>
  );
};

export default Notifications;
