import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { PartialShow, useDiscoverShowsQuery } from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { PreferencesContext } from '../../preferences/contexts/PreferencesContext';
import { DEFAULT_GENRE_RECOMMENDATION } from '../constants';

interface ShowPreferenceContextType {
  shows: PartialShow[];
  loading: boolean;
  updateShow: (showId: number, data: Partial<PartialShow>) => void;
}

interface Props {
  children: ReactNode;
}

const ShowsOnboardingContext = createContext<ShowPreferenceContextType>({
  shows: [],
  loading: true,
  updateShow: noop,
});

const ShowsOnboardingProvider = ({ children }: Props) => {
  const { selectedGenres } = useContext(PreferencesContext);
  const [shows, setShows] = useState<PartialShow[]>([]);

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
    (showId: number, data: Partial<PartialShow>) => {
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
