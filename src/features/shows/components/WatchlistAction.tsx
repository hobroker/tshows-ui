import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
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

const WatchlistAction = ({ status, onClick }: Props) => {
  const handleClick = () => {
    onClick(STATUS_TOGGLE_MAP[status]);
  };

  return (
    <ActionButton onClick={handleClick}>
      {status === Status.InWatchlist ? (
        <BookmarkIcon />
      ) : (
        <BookmarkBorderIcon />
      )}
    </ActionButton>
  );
};

export default WatchlistAction;
