import { ReactNode, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { UserState } from '../constants';

interface Props {
  children: ReactNode;
}

const WhenAnonymous = ({ children }: Props) => {
  const { userState } = useContext(UserContext);

  if (userState !== UserState.Anonymous) {
    return null;
  }

  return <>{children}</>;
};

export default WhenAnonymous;
