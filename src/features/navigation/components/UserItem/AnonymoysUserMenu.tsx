import React from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StaticRoute } from '../../../router/constants';
import UserMenu from './UserMenu';

const AnonymoysUserMenu = () => {
  const navigate = useNavigate();

  return (
    <UserMenu>
      <MenuItem onClick={() => navigate(StaticRoute.Login)}>Login</MenuItem>
      <MenuItem onClick={() => navigate(StaticRoute.Register)}>
        Register
      </MenuItem>
    </UserMenu>
  );
};

export default AnonymoysUserMenu;
