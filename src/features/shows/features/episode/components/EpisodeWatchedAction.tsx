import { PropsWithChildren } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  font-weight: bold;
`;

interface Props {
  onClick?: () => void;
  isWatched: boolean;
}

const EpisodeWatchedAction = ({ children }: PropsWithChildren<Props>) => (
  <StyledButton size="small" fullWidth>
    {children}
  </StyledButton>
);

export default EpisodeWatchedAction;
