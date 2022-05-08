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

const StatsProvider = ({ children }: Props) => {
  const loading = true;

  return (
    <StatsContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export { StatsContext };

export default StatsProvider;
