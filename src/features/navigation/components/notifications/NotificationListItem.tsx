import { ListItem, ListItemButton, Stack, Typography } from '@mui/material';
import React, { useCallback, useContext } from 'react';
import { DateTime } from 'luxon';
import { NotificationFragment } from '../../../../generated/graphql';
import CustomImage from '../../../shows/components/CustomImage';
import { NotificationsContext } from '../../contexts/NotificationsContext';

interface Props {
  notification: NotificationFragment;
}

const NotificationListItem = ({ notification }: Props) => {
  const { readNotification } = useContext(NotificationsContext);
  const { id, episode } = notification;
  const title = `${episode.show.name} - ${episode.seasonNumber}x${episode.number} - ${episode.name}`;
  const onClick = useCallback(
    () => readNotification(id),
    [id, readNotification],
  );

  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ gap: 1, px: 1 }} onClick={onClick}>
        <CustomImage
          path={episode.show.tallImage}
          type="tall"
          sx={{ width: 48 }}
        />
        <Stack>
          <Typography variant="caption">
            {DateTime.fromISO(episode.airDate).toFormat('ccc, MMM d')}
          </Typography>
          <Typography variant="subtitle2">{title}</Typography>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
};

export default NotificationListItem;
