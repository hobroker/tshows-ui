import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../user/contexts/UserContext';
import { UserState } from '../../user/constants';
import { RoutePath } from '../constants';

const PrivateOutlet = () => {
  const { userState } = useContext(UserContext);

  if (userState === UserState.Idle) {
    return null;
  }

  if (userState === UserState.LoggedIn) {
    return <Outlet />;
  }

  return <Navigate replace to={RoutePath.Login} />;
};

export default PrivateOutlet;
