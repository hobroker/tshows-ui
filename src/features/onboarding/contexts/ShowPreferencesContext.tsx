import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { noop } from '../../../utils/fp';
import {
  PartialShow,
  useDiscoverShowsLazyQuery,
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
  const [discoverShowsQuery] = useDiscoverShowsLazyQuery();
  const [selectedShows, setSelectedShows] = useState<number[]>([]);
  const [shows, setShows] = useState<PartialShow[]>([]);
  const fetchShows = useCallback(async () => {
    const { data } = await discoverShowsQuery({
      variables: {
        genreIds: selectedGenres,
      },
    });

    setShows(data?.discoverShows || []);
  }, [discoverShowsQuery, selectedGenres]);

  return (
    <ShowPreferencesContext.Provider
      value={{
        shows,
        fetchShows,
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
