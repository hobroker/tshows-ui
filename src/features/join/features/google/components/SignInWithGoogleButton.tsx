import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { ReactComponent as GoogleLogoSvg } from '../assets/google.svg';
import { GOOGLE_CLIENT_ID } from '../constants';
import { API_URL } from '../../../../api/constants';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.grey[400],
  '&:hover': {
    borderColor: theme.palette.grey[500],
  },
}));

const SignInWithGoogleButton = () => {
  const onSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    console.log('response', response);
    if ('accessToken' in response) {
      const accessToken = response.accessToken;

      await fetch(`${API_URL}/google`, {
        method: 'POST',
        body: JSON.stringify({
          token: accessToken,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  };

  const onFailure = (response: any) => {
    console.log('response', response);
  };
  const { signIn, loaded } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
    onSuccess,
    onFailure,
  });
  const disabled = !loaded;

  return (
    <StyledButton
      variant="outlined"
      size="large"
      onClick={signIn}
      disabled={disabled}
    >
      <Box height={20} width={20} marginRight={1}>
        <GoogleLogoSvg />
      </Box>
      Sign in with Google
    </StyledButton>
  );
};

export default SignInWithGoogleButton;
