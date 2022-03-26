import React from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../constants';
import { useJoinWithGoogleMutation } from '../../../../../generated/graphql';
import GoogleButton from './GoogleButton';

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

  const onFailure = () => {
    console.log('error');
  };
  const { signIn, loaded } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
    onSuccess,
    onFailure,
  });
  const disabled = !loaded || loading;

  return <GoogleButton disabled={disabled} onClick={signIn} />;
};

export default SignInWithGoogleButton;
