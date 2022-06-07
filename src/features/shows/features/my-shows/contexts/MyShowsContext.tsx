import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { groupBy, prop } from 'ramda';
import {
  PartialShowFragment,
  Status,
  useGetMyShowsQuery,
} from '../../../../../generated/graphql';
import { BackdropContext } from '../../../../../contexts/BackdropContext';

type ShowsMap = Record<Status, PartialShowFragment[]>;

interface ContextType {
  showsMap: ShowsMap;
}

interface Props {
  children: ReactNode;
}

const MyShowsContext = createContext<ContextType>({
  showsMap: {} as ShowsMap,
});

const MyShowsProvider = ({ children }: Props) => {
  const { toggleBackdrop } = useContext(BackdropContext);
  const [shows, setShows] = useState<ShowsMap>({} as ShowsMap);
  const { data, loading } = useGetMyShowsQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (!data?.getMyShows) return;

    setShows(groupBy(prop('status'), data.getMyShows));
  }, [data]);

  useEffect(() => {
    toggleBackdrop(loading);
  }, [toggleBackdrop, loading]);

  return (
    <MyShowsContext.Provider
      value={{
        showsMap: shows,
      }}
    >
      {children}
    </MyShowsContext.Provider>
  );
};

export { MyShowsContext };

export default MyShowsProvider;
