import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { useContext } from 'react';
import { GOOGLE_CLIENT_ID } from '../constants';
import useAlert from '../../../../../hooks/useAlert';
import { useJoinWithGoogleMutation } from '../../../../../generated/graphql';
import { UserContext } from '../../../../user/contexts/UserContext';
import { noop } from '../../../../../utils/fp';

interface Props {
  toggleLoading?: () => void;
}

const useJoinWithGoogle = ({ toggleLoading = noop }: Props = {}) => {
  const { notifyError } = useAlert();
  const [joinWithGoogle, { loading }] = useJoinWithGoogleMutation();
  const { refreshUser } = useContext(UserContext);

  const handleSuccess = async (
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

      await refreshUser();
      toggleLoading();
    }
  };

  const handleFailure = () => {
    toggleLoading();

    return notifyError('Google login failed');
  };

  const handleRequest = () => {
    toggleLoading();
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
    onSuccess: handleSuccess,
    onFailure: handleFailure,
    onRequest: handleRequest,
  });

  return {
    loading: !loaded || loading,
    signIn,
  };
};

export default useJoinWithGoogle;
