import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(0.5, 2),
}));

const LoginButton = () => (
  <StyledButton href="/login" color="secondary" variant="contained">
    Login
  </StyledButton>
);

export default LoginButton;
