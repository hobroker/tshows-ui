import { createContext, ReactNode } from 'react';
import {
  StatsCalendarItem,
  useGetStatsCalendarQuery,
} from '../../../generated/graphql';

interface ContextType {
  data: StatsCalendarItem[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const StatsCalendarContext = createContext<ContextType>({
  data: [],
  loading: false,
});

const StatsCalendarProvider = ({ children }: Props) => {
  const { data, loading } = useGetStatsCalendarQuery();

  return (
    <StatsCalendarContext.Provider
      value={{
        data: data?.getStatsCalendar || [],
        loading,
      }}
    >
      {children}
    </StatsCalendarContext.Provider>
  );
};

export { StatsCalendarContext };

export default StatsCalendarProvider;
