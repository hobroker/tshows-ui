import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useCallback, useContext } from 'react';
import { DateTime } from 'luxon';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import { NotificationFragment } from '../../../../generated/graphql';
import CustomImage from '../../../shows/components/CustomImage';
import { NotificationsContext } from '../../contexts/NotificationsContext';
import { DynamicRoute } from '../../../router/constants';
import { slugifyShow } from '../../../shows/utils/slugify';

interface Props {
  notification: NotificationFragment;
}

const NotificationListItem = ({ notification }: Props) => {
  const navigate = useNavigate();
  const { readNotification } = useContext(NotificationsContext);
  const { id, episode } = notification;
  const title = `${episode.show.name} - ${episode.seasonNumber}x${episode.number} - ${episode.name}`;
  const readAndHide = useCallback(
    () => readNotification(id),
    [id, readNotification],
  );
  const redirectAndRead = useCallback(() => {
    navigate(DynamicRoute.Show(slugifyShow(notification.episode.show)));
    readAndHide();
  }, [navigate, notification.episode.show, readAndHide]);

  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ px: 1 }}>
        <Box
          sx={{ flex: 1, display: 'flex', gap: 1 }}
          onClick={redirectAndRead}
        >
          <CustomImage
            path={episode.show.tallImage}
            type="tall"
            sx={{ width: 48 }}
          />
          <Stack sx={{ flex: 1 }}>
            <Typography variant="caption">
              {DateTime.fromISO(episode.airDate).toFormat('ccc, MMM d')}
            </Typography>
            <Typography variant="subtitle2">{title}</Typography>
          </Stack>
        </Box>
        <Stack sx={{ alignSelf: 'flex-start' }}>
          <IconButton color="inherit" size="small" onClick={readAndHide}>
            <CloseIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
          <IconButton color="inherit" size="small">
            <CheckCircleOutlineIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
};

export default NotificationListItem;
