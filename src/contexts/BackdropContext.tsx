import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { not } from 'rambda';
import { Backdrop, CircularProgress } from '@mui/material';
import { noop } from '../utils/fp';

interface ShowPreferenceContextType {
  isBackdropOpen: boolean;
  toggleBackdrop: () => void;
}

interface Props {
  children: ReactNode;
}

const BackdropContext = createContext<ShowPreferenceContextType>({
  isBackdropOpen: true,
  toggleBackdrop: noop,
});

const BackdropProvider = ({ children }: Props) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const toggleBackdrop = useCallback(() => setIsBackdropOpen(not), []);

  return (
    <BackdropContext.Provider
      value={{
        isBackdropOpen,
        toggleBackdrop,
      }}
    >
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.appBar + 1 }}
        open={isBackdropOpen}
      >
        <CircularProgress color="inherit" size={72} thickness={4} />
      </Backdrop>
      {children}
    </BackdropContext.Provider>
  );
};

export { BackdropContext };

export default BackdropProvider;
