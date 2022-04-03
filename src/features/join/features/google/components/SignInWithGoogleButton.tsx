import React, { useContext } from 'react';
import useJoinWithGoogle from '../hooks/useJoinWithGoogle';
import { BackdropContext } from '../../../../../contexts/BackdropContext';
import GoogleButton from './GoogleButton';

const SignInWithGoogleButton = () => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const { loading, signIn } = useJoinWithGoogle({
    toggleLoading: toggleBackdrop,
  });

  return <GoogleButton disabled={loading} onClick={signIn} />;
};

export default SignInWithGoogleButton;
