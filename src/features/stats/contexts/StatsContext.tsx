import { createContext, ReactNode } from 'react';
import {
  PieItem,
  StatsCalendarItem,
  useGetStatsPageDataQuery,
} from '../../../generated/graphql';

interface ContextType {
  calendar: StatsCalendarItem[];
  genres: PieItem[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const StatsContext = createContext<ContextType>({
  calendar: [],
  genres: [],
  loading: false,
});

const StatsProvider = ({ children }: Props) => {
  const { data, loading } = useGetStatsPageDataQuery();

  return (
    <StatsContext.Provider
      value={{
        calendar: data?.getStatsCalendar || [],
        genres: data?.getStatsGenres || [],
        loading,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export { StatsContext };

export default StatsProvider;
