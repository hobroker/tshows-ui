import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import { alpha, styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { Status } from '../../../generated/graphql';

const StyledIconButton = styled(IconButton)`
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.5)};
  padding: 2px;

  .check-icon + .remove-icon {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.95)};

    .check-icon {
      display: none;

      & + .remove-icon {
        display: block;
      }
    }
  }
`;

interface Props {
  onClick: (status: Status) => void;
  status: Status;
}

const CardWatchlistButton = ({ status, onClick }: Props) => {
  const handleClick = () => {
    if (status === Status.InWatchlist) {
      onClick(Status.None);
    } else {
      onClick(Status.InWatchlist);
    }
  };

  return (
    <StyledIconButton size="small" onClick={handleClick}>
      {status === Status.InWatchlist ? (
        <>
          <CheckIcon className="check-icon" />
          <RemoveIcon className="remove-icon" />
        </>
      ) : (
        <AddIcon />
      )}
    </StyledIconButton>
  );
};

export default CardWatchlistButton;
