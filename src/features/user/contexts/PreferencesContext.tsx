import { createContext, ReactNode, useContext } from 'react';
import { noop } from '../../../utils/fp';
import { useSavePreferencesMutation } from '../../../generated/graphql';
import { GenrePreferencesContext } from '../../onboarding/contexts/GenrePreferencesContext';

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
  const { selectedGenres } = useContext(GenrePreferencesContext);
  const [savePreferences] = useSavePreferencesMutation({
    variables: {
      genreIds: selectedGenres,
    },
  });

  return (
    <PreferencesContext.Provider value={{ savePreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext };

export default PreferencesProvider;
