import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactComponent as GoogleLogoSvg } from '../assets/google.svg';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.grey[400],
  '&:hover': {
    borderColor: theme.palette.grey[500],
  },
}));

const LoginPage = () => (
  <StyledButton variant="outlined" size="large">
    <Box height={20} width={20} marginRight={1}>
      <GoogleLogoSvg />
    </Box>
    Sign in with Google
  </StyledButton>
);

export default LoginPage;
