import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  ShowSummaryFragment,
  useListTrendingQuery,
} from '../../../../../generated/graphql';
import { noop } from '../../../../../utils/fp';

interface ContextType {
  shows: ShowSummaryFragment[];
  fetchNextPage: () => void;
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const TrendingContext = createContext<ContextType>({
  shows: [],
  loading: false,
  fetchNextPage: noop,
});

const TrendingProvider = ({ children }: Props) => {
  const page = useRef(1);
  const { data, loading, refetch } = useListTrendingQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [shows, setShows] = useState<ShowSummaryFragment[]>([]);
  const fetchNextPage = useCallback(() => {
    if (loading) return;
    page.current += 1;
    refetch({ page: page.current });
  }, [refetch, loading, page]);

  useEffect(() => {
    if (!data) return;
    setShows((shows) => [...shows, ...data.listTrending.slice(0, 5)]);
  }, [data]);

  return (
    <TrendingContext.Provider
      value={{
        shows,
        loading,
        fetchNextPage,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export { TrendingContext };

export default TrendingProvider;
