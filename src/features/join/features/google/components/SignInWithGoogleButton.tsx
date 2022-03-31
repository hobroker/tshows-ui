import React from 'react';
import GoogleButton from './GoogleButton';
import useJoinWithGoogle from '../hooks/useJoinWithGoogle';

interface Props {
  toggleBackdrop: () => void;
}

const SignInWithGoogleButton = ({ toggleBackdrop }: Props) => {
  const { loading, signIn } = useJoinWithGoogle({
    toggleLoading: toggleBackdrop,
  });

  return <GoogleButton disabled={loading} onClick={signIn} />;
};

export default SignInWithGoogleButton;
