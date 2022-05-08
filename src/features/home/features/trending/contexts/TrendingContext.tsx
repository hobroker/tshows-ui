import React, { createContext, ReactNode } from 'react';
import {
  ShowSummaryFragment,
  useListTrendingQuery,
} from '../../../../../generated/graphql';

interface ContextType {
  shows: ShowSummaryFragment[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const TrendingContext = createContext<ContextType>({
  shows: [],
  loading: false,
});

const TrendingProvider = ({ children }: Props) => {
  const { data, loading } = useListTrendingQuery();

  return (
    <TrendingContext.Provider
      value={{
        shows: data?.listTrending || [],
        loading,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export { TrendingContext };

export default TrendingProvider;
