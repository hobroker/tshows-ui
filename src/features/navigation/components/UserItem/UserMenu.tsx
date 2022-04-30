import React, { ReactNode } from 'react';
import { Avatar, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useMenu from '../../hooks/useMenu';
import DropdownMenu from './DropdownMenu';

interface Props {
  children: ReactNode[];
  avatar?: string;
}

const UserMenu = ({ children, avatar }: Props) => {
  const { onClose, onOpen, anchorEl } = useMenu();

  return (
    <DropdownMenu
      onClose={onClose}
      anchorEl={anchorEl}
      trigger={
        <Button
          disableElevation
          onClick={onOpen}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <Avatar
            src={avatar}
            sx={avatar ? { backgroundColor: 'white' } : {}}
          />
        </Button>
      }
    >
      {children}
    </DropdownMenu>
  );
};

export default UserMenu;
