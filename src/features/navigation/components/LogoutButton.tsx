import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLogoutMutation } from '../../../generated/graphql';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1, 1, 2),
  padding: theme.spacing(0.5, 2),
}));

const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const onClick = () => logout();

  return (
    <StyledButton variant="contained" onClick={onClick}>
      Logout
    </StyledButton>
  );
};

export default LogoutButton;
