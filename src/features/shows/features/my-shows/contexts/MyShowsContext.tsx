import { createContext, ReactNode, useEffect, useState } from 'react';
import {
  PartialShowFragment,
  useGetMyShowsQuery,
} from '../../../../../generated/graphql';

interface ContextType {
  shows: PartialShowFragment[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const MyShowsContext = createContext<ContextType>({
  shows: [],
  loading: true,
});

const MyShowsProvider = ({ children }: Props) => {
  const [shows, setShows] = useState<PartialShowFragment[]>([]);
  const { data, loading } = useGetMyShowsQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (!data?.getMyShows) return;
    setShows(data.getMyShows);
  }, [data]);

  return (
    <MyShowsContext.Provider
      value={{
        shows,
        loading,
      }}
    >
      {children}
    </MyShowsContext.Provider>
  );
};

export { MyShowsContext };

export default MyShowsProvider;
