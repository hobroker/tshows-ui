import React from 'react';
import useJoinWithGoogle from '../hooks/useJoinWithGoogle';
import GoogleButton from './GoogleButton';

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
