import { createContext, ReactNode, useEffect, useState } from 'react';
import {
  StatsSummaryItem,
  useGetStatsSummaryQuery,
} from '../../../generated/graphql';

interface ContextType {
  statsItems: StatsSummaryItem[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const StatsSummaryContext = createContext<ContextType>({
  statsItems: [],
  loading: false,
});

const StatsSummaryProvider = ({ children }: Props) => {
  const { data, loading } = useGetStatsSummaryQuery({
    nextFetchPolicy: 'network-only',
  });
  const [statsItems, setStatsItems] = useState<StatsSummaryItem[]>([]);

  useEffect(() => {
    if (!data) return;
    setStatsItems(data.getStatsSummary);
  }, [data]);

  return (
    <StatsSummaryContext.Provider value={{ statsItems, loading }}>
      {children}
    </StatsSummaryContext.Provider>
  );
};

export { StatsSummaryContext };

export default StatsSummaryProvider;
