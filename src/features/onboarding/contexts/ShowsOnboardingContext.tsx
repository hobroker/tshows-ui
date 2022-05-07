import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  PartialShowFragment,
  useDiscoverShowsQuery,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { PreferencesContext } from '../../preferences/contexts/PreferencesContext';
import { DEFAULT_GENRE_RECOMMENDATION } from '../constants';

interface ContextType {
  shows: PartialShowFragment[];
  loading: boolean;
  updateShow: (showId: number, data: Partial<PartialShowFragment>) => void;
}

interface Props {
  children: ReactNode;
}

const ShowsOnboardingContext = createContext<ContextType>({
  shows: [],
  loading: true,
  updateShow: noop,
});

const ShowsOnboardingProvider = ({ children }: Props) => {
  const { selectedGenres } = useContext(PreferencesContext);
  const [shows, setShows] = useState<PartialShowFragment[]>([]);

  const { data, loading } = useDiscoverShowsQuery({
    variables: {
      genreIds: selectedGenres.length
        ? selectedGenres
        : [DEFAULT_GENRE_RECOMMENDATION],
    },
  });

  useEffect(() => {
    if (data?.discoverShows) {
      setShows(data.discoverShows);
    }
  }, [data]);

  const updateShow = useCallback(
    (showId: number, data: Partial<PartialShowFragment>) => {
      const updatedShows = shows.map((show) => {
        if (show.externalId === showId) {
          return { ...show, ...data };
        }

        return show;
      });

      setShows(updatedShows);
    },
    [shows],
  );

  return (
    <ShowsOnboardingContext.Provider
      value={{
        shows,
        loading,
        updateShow,
      }}
    >
      {children}
    </ShowsOnboardingContext.Provider>
  );
};

export { ShowsOnboardingContext };

export default ShowsOnboardingProvider;
