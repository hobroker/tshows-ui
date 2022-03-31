import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { noop } from '../../../utils/fp';
import {
  PartialShow,
  useDiscoverShowsLazyQuery,
  useDiscoverShowsQuery,
} from '../../../generated/graphql';
import { GenrePreferencesContext } from './GenrePreferencesContext';

interface ShowPreferenceContextType {
  shows: PartialShow[];
  fetchShows: () => void;
  selectedShows: number[];
  setSelectedShows: (value: number[]) => void;
}

interface Props {
  children: ReactNode;
}

const ShowPreferencesContext = createContext<ShowPreferenceContextType>({
  shows: [],
  fetchShows: noop,
  selectedShows: [],
  setSelectedShows: noop,
});

const ShowPreferencesProvider = ({ children }: Props) => {
  const { selectedGenres } = useContext(GenrePreferencesContext);
  const [selectedShows, setSelectedShows] = useState<number[]>([]);
  const [shows, setShows] = useState<PartialShow[]>([]);

  const { data } = useDiscoverShowsQuery({
    variables: {
      genreIds: selectedGenres,
    },
  });

  useEffect(() => {
    if (data && data.discoverShows) {
      setShows(data.discoverShows);
    }
  }, [data]);

  return (
    <ShowPreferencesContext.Provider
      value={{
        shows,
        fetchShows: () => {},
        selectedShows,
        setSelectedShows,
      }}
    >
      {children}
    </ShowPreferencesContext.Provider>
  );
};

export { ShowPreferencesContext };

export default ShowPreferencesProvider;
