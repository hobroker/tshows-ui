import * as React from 'react';
import { useScrollTrigger } from '@mui/material';

interface Props {
  children: React.ReactElement;
}

const ElevationScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 1,
  });
};

export default ElevationScroll;
