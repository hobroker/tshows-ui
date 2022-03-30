import { createContext, ReactNode, useCallback, useContext } from 'react';
import { prop } from 'rambda';
import { noop } from '../../../utils/fp';
import {
  useGetPreferencesLazyQuery,
  useSavePreferencesMutation,
} from '../../../generated/graphql';
import { GenrePreferencesContext } from '../../onboarding/contexts/GenrePreferencesContext';

interface PreferencesContextType {
  savePreferences: () => void;
  refreshPreferences: () => Promise<void>;
}

interface Props {
  children: ReactNode;
}

const PreferencesContext = createContext<PreferencesContextType>({
  savePreferences: noop,
  refreshPreferences: () => Promise.resolve(),
});

const PreferencesProvider = ({ children }: Props) => {
  const { setSelectedGenres, selectedGenres } = useContext(
    GenrePreferencesContext,
  );
  const [getPreferences] = useGetPreferencesLazyQuery();

  const [savePreferences] = useSavePreferencesMutation({
    variables: {
      genreIds: selectedGenres,
    },
  });

  const refreshPreferences = useCallback(async () => {
    try {
      const { data } = await getPreferences();
      const genreIds =
        data?.getPreferences?.genres.map(prop('externalId')) || [];

      setSelectedGenres(genreIds);
    } catch (e) {}
  }, [getPreferences, setSelectedGenres]);

  return (
    <PreferencesContext.Provider
      value={{ savePreferences, refreshPreferences }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext };

export default PreferencesProvider;
