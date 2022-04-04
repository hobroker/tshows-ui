import * as React from 'react';
import { ReactNode } from 'react';
import type { MenuProps } from '@mui/material';
import { Button, Menu, Avatar, MenuItem } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

interface Props {
  children: ReactNode[];
  avatar?: string;
}

const UserMenu = ({ children, avatar }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const close = () => setAnchorEl(null);

  return (
    <div>
      <Button
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Avatar src={avatar} sx={avatar ? { backgroundColor: 'white' } : {}} />
      </Button>
      <StyledMenu anchorEl={anchorEl} open={isOpen} onClose={close}>
        {React.Children.map(children, (item: ReactNode) => {
          const child = item as React.ReactElement;

          if (child.type !== MenuItem) {
            return child;
          }

          return React.cloneElement(child, {
            disableRipple: true,
            onClick: async () => {
              await child.props?.onClick?.();
              close();
            },
          });
        })}
      </StyledMenu>
    </div>
  );
};

export default UserMenu;
