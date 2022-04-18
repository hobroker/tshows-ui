import * as React from 'react';

const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const onOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(null);

  return { anchorEl, onClose, onOpen };
};

export default useMenu;
