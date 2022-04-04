import * as React from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../router/constants';
import UserMenu from './UserMenu';

const AnonymoysUserMenu = () => {
  const navigate = useNavigate();

  return (
    <UserMenu>
      <MenuItem onClick={() => navigate(RoutePath.Login)}>Login</MenuItem>
      <MenuItem onClick={() => navigate(RoutePath.Register)}>Register</MenuItem>
    </UserMenu>
  );
};

export default AnonymoysUserMenu;
