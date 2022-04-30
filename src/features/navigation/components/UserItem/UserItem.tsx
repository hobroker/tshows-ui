import React, { useContext } from 'react';
import { UserContext } from '../../../user/contexts/UserContext';
import { UserState } from '../../../user/constants';
import AnonymoysUserMenu from './AnonymoysUserMenu';
import UserMenu from './AuthenticatedUserMenu';

const UserItem = () => {
  const { userState } = useContext(UserContext);

  if (userState === UserState.LoggedIn) {
    return <UserMenu />;
  }

  return <AnonymoysUserMenu />;
};

export default UserItem;
