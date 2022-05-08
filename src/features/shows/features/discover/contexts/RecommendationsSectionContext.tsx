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

const RecommendationsSectionContext = createContext<ContextType>({
  shows: [],
  loading: false,
});

const RecommendationsSectionProvider = ({ children }: Props) => {
  const { data, loading } = useListRecommendationsQuery({
    nextFetchPolicy: 'network-only',
  });
  const [shows, setShows] = useState<ShowSummaryFragment[]>([]);

  useEffect(() => {
    if (!data) return;
    setShows((shows) => data.listRecommendations);
  }, [data]);

  return (
    <RecommendationsSectionContext.Provider
      value={{
        shows,
        loading,
      }}
    >
      {children}
    </RecommendationsSectionContext.Provider>
  );
};

export { RecommendationsSectionContext };

export default RecommendationsSectionProvider;
