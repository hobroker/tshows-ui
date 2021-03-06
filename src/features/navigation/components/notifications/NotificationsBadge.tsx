import React, { useContext } from 'react';
import { Badge, Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationsContext } from '../../contexts/NotificationsContext';

const NotificationsBadge = () => {
  const { notifications } = useContext(NotificationsContext);
  const notificationsCount = notifications.length;

  return (
    <Box sx={{ marginTop: 0.5 }}>
      <IconButton size="large">
        <Badge badgeContent={notificationsCount} color="secondary">
          <NotificationsIcon color="primary" />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default NotificationsBadge;
