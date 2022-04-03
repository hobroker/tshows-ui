import { createContext, ReactNode, useCallback, useState } from 'react';
import { noop, toggleListItem } from '../../../utils/fp';
import { useToggleGenrePreferenceMutation } from '../../../generated/graphql';

interface PreferencesContextType {
  toggleGenrePreference: (genreId: number) => void;
  selectedGenres: number[];
  setSelectedGenres: (value: number[]) => void;
}

interface Props {
  children: ReactNode;
}

const PreferencesContext = createContext<PreferencesContextType>({
  toggleGenrePreference: noop,
  selectedGenres: [],
  setSelectedGenres: noop,
});

const PreferencesProvider = ({ children }: Props) => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [toggleGenrePreferenceMutation] = useToggleGenrePreferenceMutation();

  const toggleGenrePreference = useCallback(
    (genreId: number) => {
      toggleGenrePreferenceMutation({ variables: { genreId } });
      setSelectedGenres(toggleListItem(genreId));
    },
    [toggleGenrePreferenceMutation],
  );

  return (
    <PreferencesContext.Provider
      value={{
        toggleGenrePreference,
        selectedGenres,
        setSelectedGenres,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext };

export default PreferencesProvider;
