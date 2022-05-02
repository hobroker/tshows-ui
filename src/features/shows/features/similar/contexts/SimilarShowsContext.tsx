import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  SimilarShowFragment,
  useGetSimilarShowsQuery,
} from '../../../../../generated/graphql';
import { ShowPageContext } from '../../../contexts/ShowPageContext';

interface ContextType {
  shows: SimilarShowFragment[];
  loading: boolean;
}

const SimilarShowsContext = createContext<ContextType>({
  shows: [],
  loading: true,
});

interface Props {
  children: ReactNode;
}

const SimilarShowsProvider = ({ children }: Props) => {
  const {
    show: { externalId },
  } = useContext(ShowPageContext);
  const { data, loading } = useGetSimilarShowsQuery({
    variables: { externalId },
  });
  const [shows, setShows] = useState<SimilarShowFragment[]>([]);

  useEffect(() => {
    if (data?.getSimilarShows) {
      setShows(data.getSimilarShows);
    }
  }, [data]);

  return (
    <SimilarShowsContext.Provider
      value={{
        shows,
        loading,
      }}
    >
      {children}
    </SimilarShowsContext.Provider>
  );
};

export { SimilarShowsContext };

export default SimilarShowsProvider;
