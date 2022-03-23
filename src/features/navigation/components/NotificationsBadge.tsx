import React, { useContext } from 'react';
import { Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavigationContext } from '../contexts/NavigationContext';

const NotificationsBadge = () => {
  const { notifications } = useContext(NavigationContext);
  const notificationsCount = notifications.length;

  return (
    <IconButton size="large" color="inherit">
      <Badge badgeContent={notificationsCount} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationsBadge;
