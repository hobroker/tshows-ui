import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
} from '@mui/material';
import { DateTime } from 'luxon';
import IndefiniteLoading from '../../../../../components/IndefiniteLoading';
import { EpisodeWithoutShowFragment } from '../../../../../generated/graphql';
import WhenLoggedIn from '../../../../user/components/WhenLoggedIn';
import CustomImage from '../../CustomImage';
import EpisodeWatchActionButton from './EpisodeWatchActionButton';

interface Props {
  seasonNumber: number;
  episodes?: EpisodeWithoutShowFragment[];
}

const SeasonDetails = ({ seasonNumber, episodes }: Props) =>
  !episodes ? (
    <IndefiniteLoading />
  ) : (
    <List sx={{ width: '100%', py: 0 }}>
      {episodes.map(
        ({ id, wideImage, name, description, isWatched, airDate, number }) => (
          <ListItem key={id} sx={{ pl: 0, gap: 1, alignItems: 'flex-start' }}>
            <ListItemAvatar>
              <CustomImage path={wideImage} type="wide" sx={{ height: 100 }} />
            </ListItemAvatar>
            <ListItemText
              primary={`${number}. ${name}`}
              secondary={
                <Stack component="span">
                  <span>
                    {DateTime.fromISO(airDate).toFormat('d MMM, yyyy')}
                  </span>
                  <span>{description}</span>
                </Stack>
              }
              sx={{ my: 0, pr: 2 }}
            />
            <WhenLoggedIn>
              <ListItemSecondaryAction sx={{ right: 0 }}>
                <EpisodeWatchActionButton
                  episodeId={id}
                  isWatched={isWatched}
                  seasonNumber={seasonNumber}
                />
              </ListItemSecondaryAction>
            </WhenLoggedIn>
          </ListItem>
        ),
      )}
    </List>
  );

export default SeasonDetails;
