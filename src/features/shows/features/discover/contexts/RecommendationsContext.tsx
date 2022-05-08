import React, { createContext, ReactNode, useEffect, useState } from 'react';
import {
  ShowSummaryFragment,
  useListRecommendationsQuery,
} from '../../../../../generated/graphql';

interface ContextType {
  shows: ShowSummaryFragment[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const RecommendationsContext = createContext<ContextType>({
  shows: [],
  loading: false,
});

const RecommendationsProvider = ({ children }: Props) => {
  const { data, loading } = useListRecommendationsQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [shows, setShows] = useState<ShowSummaryFragment[]>([]);

  useEffect(() => {
    if (!data) return;
    setShows((shows) => data.listRecommendations);
  }, [data]);

  return (
    <RecommendationsContext.Provider
      value={{
        shows,
        loading,
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
};

export { RecommendationsContext };

export default RecommendationsProvider;
