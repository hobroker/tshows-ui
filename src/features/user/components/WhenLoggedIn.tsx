import { ReactNode, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { UserState } from '../constants';

interface Props {
  children: ReactNode;
}

const WhenLoggedIn = ({ children }: Props) => {
  const { userState } = useContext(UserContext);

  if (userState !== UserState.LoggedIn) {
    return null;
  }

  return <>{children}</>;
};

export default WhenLoggedIn;
