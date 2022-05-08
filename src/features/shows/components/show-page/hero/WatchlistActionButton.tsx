import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { LoadingButton } from '@mui/lab';
import type { ButtonProps } from '@mui/material';
import { ShowPageContext } from '../../../contexts/ShowPageContext';
import { Status } from '../../../../../generated/graphql';
import useHover from '../../../../../hooks/useHover';
import useWatchlistActions from '../../../hooks/useWatchlistActions';
import { ShowStatusToggleMap } from '../../../constants';

const StyledButton = styled(LoadingButton)`
  font-weight: bold;
  white-space: nowrap;

  &.MuiButton-outlined {
    padding: 6px;

    &,
    &:hover,
    &:disabled {
      border-width: 2px;
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

const getActionProps = (
  status: Status,
  isHovered: boolean,
): { color: ButtonProps['color']; icon: JSX.Element; text: string } => {
  if (status === Status.InWatchlist) {
    if (isHovered) {
      return {
        text: 'Remove from watchlist',
        icon: <PlaylistRemoveIcon />,
        color: 'error',
      };
    }

    return {
      text: 'In watchlist',
      icon: <PlaylistAddCheckIcon />,
      color: 'primary',
    };
  }

  return {
    text: 'Add to watchlist',
    icon: <PlaylistAddIcon />,
    color: 'primary',
  };
};

const WatchlistActionButton = () => {
  const { upsertWatchlistItem, loading } = useWatchlistActions();
  const [hoverRef, isHovered] = useHover<HTMLButtonElement>();
  const { show, update } = useContext(ShowPageContext);
  const status = show?.status;

  if (!status) {
    return null;
  }

  const onClick = () => {
    const showId = show.externalId;
    const toStatus = ShowStatusToggleMap[status];

    update({ status: toStatus });
    upsertWatchlistItem({ showId, status: toStatus });
  };

  const { icon, text, color } = getActionProps(status, isHovered);

  return (
    <StyledButton
      ref={hoverRef}
      size="large"
      variant={status === Status.InWatchlist ? 'contained' : 'outlined'}
      startIcon={icon}
      onClick={onClick}
      loading={loading}
      color={color}
    >
      {text}
    </StyledButton>
  );
};

export default WatchlistActionButton;
