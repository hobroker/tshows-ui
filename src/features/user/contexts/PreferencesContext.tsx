import { createContext, ReactNode, useState } from 'react';
import { noop } from '../../../utils/fp';
import { useSavePreferencesMutation } from '../../../generated/graphql';

interface PreferencesContextType {
  savePreferences: () => void;
  selectedGenres: number[];
  setSelectedGenres: (value: number[]) => void;
}

interface Props {
  children: ReactNode;
}

const PreferencesContext = createContext<PreferencesContextType>({
  savePreferences: noop,
  selectedGenres: [],
  setSelectedGenres: noop,
});

const PreferencesProvider = ({ children }: Props) => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [savePreferences] = useSavePreferencesMutation({
    variables: {
      genreIds: selectedGenres,
    },
  });

  return (
    <PreferencesContext.Provider
      value={{ savePreferences, selectedGenres, setSelectedGenres }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext };

export default PreferencesProvider;
