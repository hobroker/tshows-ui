import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { Status } from '../../../generated/graphql';

const StyledIconButton = styled(IconButton)`
  .icon {
    color: ${({ theme }) => theme.palette.secondary.main};
    filter: drop-shadow(0 0 5px black);
  }
`;

interface Props {
  onClick: (status: Status) => void;
  status: Status;
}

const STATUS_TOGGLE_MAP = {
  [Status.InWatchlist]: Status.None,
  [Status.None]: Status.InWatchlist,
  [Status.StoppedWatching]: Status.InWatchlist,
} as const;

const CardWatchlistButton = ({ status, onClick }: Props) => {
  const handleClick = () => {
    onClick(STATUS_TOGGLE_MAP[status]);
  };

  return (
    <StyledIconButton size="small" onClick={handleClick}>
      {status === Status.InWatchlist ? (
        <BookmarkIcon className="icon" />
      ) : (
        <BookmarkBorderIcon className="icon" />
      )}
    </StyledIconButton>
  );
};

export default CardWatchlistButton;
