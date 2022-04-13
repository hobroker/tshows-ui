import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../user/contexts/UserContext';
import { UserState } from '../../user/constants';
import { RoutePath } from '../../router/constants';

const useHandleLoggedInUsers = () => {
  const { userState } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userState !== UserState.LoggedIn) {
      return;
    }

    navigate(RoutePath.Home);
  }, [navigate, userState]);
};

export default useHandleLoggedInUsers;
