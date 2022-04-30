import React, { ReactNode } from 'react';
import type { MenuProps } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

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
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[3],
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
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
  children: ReactNode;
  trigger: ReactNode;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const DropdownMenu = ({ children, anchorEl, trigger, onClose }: Props) => {
  const isOpen = Boolean(anchorEl);

  return (
    <div>
      {trigger}
      <StyledMenu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        {React.Children.map(children, (item: ReactNode) => {
          const child = item as React.ReactElement;

          if (child.type !== MenuItem) {
            return child;
          }

          return React.cloneElement(child, {
            disableRipple: true,
            onClick: async () => {
              onClose();
              await child.props?.onClick?.();
            },
          });
        })}
      </StyledMenu>
    </div>
  );
};

export default DropdownMenu;
