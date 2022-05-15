import React, { MouseEvent, useCallback, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { DateTime } from 'luxon';
import { Box, Button, Divider } from '@mui/material';
import { Season } from '../../../../../generated/graphql';
import CustomImage from '../../CustomImage';
import { UserContext } from '../../../../user/contexts/UserContext';
import { UserState } from '../../../../user/constants';
import { ShowPageContext } from '../../../contexts/ShowPageContext';

interface Props {
  season: Season;
}

const SeasonSummary = ({
  season: {
    description,
    airDate,
    name,
    tallImage,
    episodeCount,
    isFullyWatched,
    number,
  },
}: Props) => {
  const { userState } = useContext(UserContext);
  const { toggleSeasonIsFullyWatched } = useContext(ShowPageContext);
  const onMarkAllAsWatchedClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      toggleSeasonIsFullyWatched(number);
    },
    [number, toggleSeasonIsFullyWatched],
  );

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <CustomImage path={tallImage} sx={{ width: 80 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">{name}</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {DateTime.fromISO(airDate).toFormat('d MMM, yyyy')}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {episodeCount} episodes
          </Typography>
          {userState === UserState.LoggedIn && (
            <Button
              variant="outlined"
              sx={{ ml: 'auto', lineHeight: 1 }}
              size="small"
              onClick={onMarkAllAsWatchedClick}
            >
              {isFullyWatched ? 'Mark as unwatched' : 'Mark as watched'}
            </Button>
          )}
        </Box>
        <Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SeasonSummary;
