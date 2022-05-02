import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DateTime } from 'luxon';
import { EpisodeWithoutShow } from '../../features/episode/types';
import { makeWideSmImage } from '../../utils/image';
import IndefiniteLoading from '../../../../components/IndefiniteLoading';
import EpisodeWatchActionButton from './EpisodeWatchActionButton';

const StyledImage = styled('img')`
  aspect-ratio: 3/2;
  height: 100px;
  object-fit: cover;
`;

interface Props {
  seasonNumber: number;
  episodes?: EpisodeWithoutShow[];
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
              <StyledImage src={makeWideSmImage(wideImage || '')} />
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
            <ListItemSecondaryAction sx={{ right: 0 }}>
              <EpisodeWatchActionButton
                episodeId={id}
                isWatched={isWatched}
                seasonNumber={seasonNumber}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ),
      )}
    </List>
  );

export default SeasonDetails;
