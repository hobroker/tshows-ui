import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { NotificationsContext } from '../../contexts/NotificationsContext';
import pluralize from '../../../stats/utils/pluralize';

const NotificationsHeader = () => {
  const { notifications, loading, readAllNotifications } =
    useContext(NotificationsContext);

  if (loading || !notifications.length) {
    return null;
  }

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', px: 1, mb: 1 }}
      component="li"
    >
      <Typography variant="subtitle2" color="textSecondary" sx={{ flex: 1 }}>
        {notifications.length} {pluralize(notifications.length, 'notification')}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        sx={{ p: 0.5, lineHeight: 1 }}
        onClick={readAllNotifications}
      >
        Mark all as read
      </Button>
    </Box>
  );
};

export default NotificationsHeader;
