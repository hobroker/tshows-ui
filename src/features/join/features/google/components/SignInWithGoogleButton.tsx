import React, { useContext } from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../constants';
import { useJoinWithGoogleMutation } from '../../../../../generated/graphql';
import GoogleButton from './GoogleButton';
import useAlert from '../../../../../hooks/useAlert';
import { JoinContext } from '../../../contexts/JoinContext';

interface Props {
  toggleBackdrop: () => void;
}

const SignInWithGoogleButton = ({ toggleBackdrop }: Props) => {
  const { notifyError } = useAlert();
  const [joinWithGoogle, { loading }] = useJoinWithGoogleMutation();
  const { handlePostJoin } = useContext(JoinContext);

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

      console.log('hhee');

      toggleBackdrop();
      handlePostJoin();
    }
  };

  const onFailure = () => notifyError('Google login failed');
  const { signIn, loaded } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
    onSuccess,
    onFailure,
  });
  const onLogin = () => {
    signIn();
    toggleBackdrop();
  };
  const disabled = !loaded || loading;

  return <GoogleButton disabled={disabled} onClick={onLogin} />;
};

export default SignInWithGoogleButton;
