import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRefreshTokenMutation } from '../../../generated/graphql';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1, 1, 2),
  padding: theme.spacing(0.5, 2),
}));

const RefreshButton = () => {
  const [refresh] = useRefreshTokenMutation();
  const onClick = () => refresh();

  return (
    <StyledButton variant="contained" onClick={onClick}>
      Refresh
    </StyledButton>
  );
};

export default RefreshButton;
