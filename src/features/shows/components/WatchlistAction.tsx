import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { alpha, styled } from '@mui/material/styles';
import { Status } from '../../../generated/graphql';
import ActionButton from './base/ActionButton';

interface Props {
  onClick: (status: Status) => void;
  status: Status;
}

const STATUS_TOGGLE_MAP = {
  [Status.InWatchlist]: Status.None,
  [Status.None]: Status.InWatchlist,
  [Status.StoppedWatching]: Status.InWatchlist,
} as const;

const StyledActionButton = styled(ActionButton)`
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.2)};
  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.4)};
  }
`;

const WatchlistAction = ({ status, onClick }: Props) => {
  const handleClick = () => {
    onClick(STATUS_TOGGLE_MAP[status]);
  };

  return (
    <StyledActionButton size="small" onClick={handleClick}>
      {status === Status.InWatchlist ? (
        <BookmarkIcon />
      ) : (
        <BookmarkBorderIcon />
      )}
    </StyledActionButton>
  );
};

export default WatchlistAction;
