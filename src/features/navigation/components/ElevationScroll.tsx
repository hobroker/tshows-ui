import { cloneElement, ReactElement } from 'react';
import { useScrollTrigger } from '@mui/material';

interface Props {
  children: ReactElement;
}

const ElevationScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 1,
  });
};

export default ElevationScroll;
