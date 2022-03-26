import * as React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../user/contexts/UserContext';
import { UserState } from '../../../user/constants';
import UserMenuSkeleton from './UserMenuSkeleton';
import LoginLink from './LoginLink';
import UserMenu from './UserMenu';

const UserItem = () => {
  const { userState } = useContext(UserContext);

  if (userState === UserState.Idle) {
    return <UserMenuSkeleton />;
  }

  if (userState === UserState.Anonymous) {
    return <LoginLink />;
  }

  return <UserMenu />;
};

export default UserItem;
