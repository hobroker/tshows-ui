import * as React from 'react';
import { useContext } from 'react';
import { MenuItem, Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from '../../../user/contexts/UserContext';
import UserMenu from './UserMenu';

const AuthenticatedUserMenu = () => {
  const { logout } = useContext(UserContext);

  const { user } = useContext(UserContext);
  const name = user?.name as string;
  const avatar = user?.avatar as string;

  return (
    <UserMenu avatar={avatar}>
      <MenuItem key="name" disableRipple disabled>
        {name}
      </MenuItem>
      <Divider key="divider" sx={{ my: 0.5 }} />
      <MenuItem key="logout" onClick={logout} disableRipple>
        <LogoutIcon />
        Logout
      </MenuItem>
    </UserMenu>
  );
};

export default AuthenticatedUserMenu;
