import { createContext, ReactNode, useContext } from 'react';
import { prop } from 'rambda';
import { noop } from '../../../utils/fp';
import {
  useGetPreferencesLazyQuery,
  useSavePreferencesMutation,
} from '../../../generated/graphql';
import useOnMount from '../../../hooks/useOnMount';
import { GenrePreferencesContext } from './GenrePreferencesContext';

interface PreferencesContextType {
  savePreferences: () => void;
}

interface Props {
  children: ReactNode;
}

const PreferencesContext = createContext<PreferencesContextType>({
  savePreferences: noop,
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

  useOnMount(async () => {
    try {
      const { data } = await getPreferences();
      const genreIds =
        data?.getPreferences?.genres.map(prop('externalId')) || [];

      if (genreIds) {
        setSelectedGenres(genreIds);
      }
    } catch (e) {}
  });

  return (
    <PreferencesContext.Provider value={{ savePreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext };

export default PreferencesProvider;
