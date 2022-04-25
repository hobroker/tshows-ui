import { useState, MouseEvent } from 'react';

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(null);

  return { anchorEl, onClose, onOpen };
};

export default useMenu;
