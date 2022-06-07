import React, { MouseEvent, useCallback, useContext } from 'react';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { UserContext } from '../../../../user/contexts/UserContext';
import { UserState } from '../../../../user/constants';
import { ShowPageContext } from '../../../contexts/ShowPageContext';
import { Status } from '../../../../../generated/graphql';

interface Props {
  isFullyWatched: boolean;
  seasonNumber: number;
}

const SeasonWatchedButton = ({ isFullyWatched, seasonNumber }: Props) => {
  const { userState } = useContext(UserContext);
  const { toggleSeasonIsFullyWatched, show } = useContext(ShowPageContext);
  const isShowInWatchlist = show.status !== Status.None;
  const onMarkAllAsWatchedClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      toggleSeasonIsFullyWatched(seasonNumber);
    },
    [seasonNumber, toggleSeasonIsFullyWatched],
  );

  if (userState !== UserState.LoggedIn) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      sx={{ lineHeight: 1 }}
      size="small"
      onClick={onMarkAllAsWatchedClick}
      disabled={!isShowInWatchlist}
      endIcon={
        isFullyWatched ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />
      }
    >
      {isFullyWatched ? 'Fully watched' : 'Mark as watched'}
    </Button>
  );
};

export default SeasonWatchedButton;
