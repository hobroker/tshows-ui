import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { NotificationsContext } from '../../contexts/NotificationsContext';
import IndefiniteLoading, {
  IndefiniteLoadingSize,
} from '../../../../components/IndefiniteLoading';
import NotificationListItem from './NotificationListItem';

const NotificationsContent = () => {
  const { notifications, loading } = useContext(NotificationsContext);

  if (loading) {
    return (
      <Box component="li">
        <IndefiniteLoading size={IndefiniteLoadingSize.Small} />
      </Box>
    );
  }

  if (notifications.length === 0) {
    return (
      <Box component="li" sx={{ textAlign: 'center' }}>
        No new notifications
      </Box>
    );
  }

  return (
    <>
      {notifications.map((notification) => (
        <NotificationListItem notification={notification} />
      ))}
    </>
  );
};

export default NotificationsContent;
