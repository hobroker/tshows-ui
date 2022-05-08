import { createContext, ReactNode, useContext, useEffect } from 'react';
import { BackdropContext } from '../../../contexts/BackdropContext';

interface ContextType {
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const StatsContext = createContext<ContextType>({
  loading: false,
});

const StatsProvider = ({ children }: Props) => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const loading = true;

  useEffect(() => {
    toggleBackdrop(loading);
  }, [toggleBackdrop, loading]);

  return (
    <StatsContext.Provider
      value={{
        loading: false,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export { StatsContext };

export default StatsProvider;
