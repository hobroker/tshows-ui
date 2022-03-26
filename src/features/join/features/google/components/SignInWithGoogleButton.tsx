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
import { useJoinWithGoogleMutation } from '../../../../../generated/graphql';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.grey[400],
  '&:hover': {
    borderColor: theme.palette.grey[500],
  },
}));

const SignInWithGoogleButton = () => {
  const [joinWithGoogle, { loading }] = useJoinWithGoogleMutation();

  const onSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('accessToken' in response) {
      await joinWithGoogle({
        variables: {
          input: {
            token: response.accessToken,
          },
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
  const disabled = !loaded || loading;

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
