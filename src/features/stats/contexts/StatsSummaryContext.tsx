import { createContext, ReactNode, useEffect, useState } from 'react';
import {
  StatsSummaryItem,
  useGetStatsSummaryQuery,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';

interface ContextType {
  statsItems: StatsSummaryItem[];
  loading: boolean;
  refetch: () => void;
}

interface Props {
  children: ReactNode;
}

const StatsSummaryContext = createContext<ContextType>({
  statsItems: [],
  loading: false,
  refetch: noop,
});

const StatsSummaryProvider = ({ children }: Props) => {
  const { data, loading, refetch } = useGetStatsSummaryQuery({
    nextFetchPolicy: 'network-only',
  });
  const [statsItems, setStatsItems] = useState<StatsSummaryItem[]>([]);

  useEffect(() => {
    if (!data) return;
    setStatsItems(data.getStatsSummary);
  }, [data]);

  return (
    <StatsSummaryContext.Provider
      value={{
        statsItems,
        loading,
        refetch,
      }}
    >
      {children}
    </StatsSummaryContext.Provider>
  );
};

export { StatsSummaryContext };

export default StatsSummaryProvider;
