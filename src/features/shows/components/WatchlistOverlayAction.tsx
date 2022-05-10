import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { alpha, styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import classNames from 'classnames';
import { Status } from '../../../generated/graphql';
import { ShowStatusToggleMap } from '../constants';

interface OverlayProps {
  status: Status;
}

const Overlay = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.create('opacity')};
  opacity: 0;
  background-color: ${({ theme }) => alpha(theme.palette.common.black, 0.5)};

  &.status-in-watchlist {
    opacity: 1;
  }
`;

const StyledActionButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(4)};
  transition: ${({ theme }) => theme.transitions.create('opacity')};
  width: 100%;
  height: 100%;

  svg {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
  }
`;

interface Props extends OverlayProps {
  onClick: (status: Status) => void;
}

const WatchlistOverlayAction = ({ status, onClick }: Props) => {
  const handleClick = () => {
    onClick(ShowStatusToggleMap[status]);
  };

  return (
    <Overlay
      className={classNames({
        'status-in-watchlist':
          status === Status.InWatchlist || status === Status.FinishedWatching,
      })}
    >
      <StyledActionButton onClick={handleClick}>
        <CheckCircleOutlineIcon />
      </StyledActionButton>
    </Overlay>
  );
};

export default WatchlistOverlayAction;
