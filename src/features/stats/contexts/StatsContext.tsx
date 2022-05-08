import { createContext, ReactNode } from 'react';

interface ContextType {
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const StatsContext = createContext<ContextType>({
  loading: false,
});

const StatsProvider = ({ children }: Props) => (
  <StatsContext.Provider
    value={{
      loading: false,
    }}
  >
    {children}
  </StatsContext.Provider>
);

export { StatsContext };

export default StatsProvider;
