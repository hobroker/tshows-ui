import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  PartialShowFragment,
  useGetMyShowsQuery,
} from '../../../../../generated/graphql';
import { BackdropContext } from '../../../../../contexts/BackdropContext';

interface ContextType {
  shows: PartialShowFragment[];
}

interface Props {
  children: ReactNode;
}

const MyShowsContext = createContext<ContextType>({
  shows: [],
});

const MyShowsProvider = ({ children }: Props) => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const [shows, setShows] = useState<PartialShowFragment[]>([]);
  const { data, loading } = useGetMyShowsQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (!data?.getMyShows) return;
    setShows(data.getMyShows);
  }, [data]);

  useEffect(() => {
    toggleBackdrop(loading);
  }, [toggleBackdrop, loading]);

  if (loading) {
    return null;
  }

  return (
    <MyShowsContext.Provider
      value={{
        shows,
      }}
    >
      {children}
    </MyShowsContext.Provider>
  );
};

export { MyShowsContext };

export default MyShowsProvider;
