import { createContext, ReactNode, useState } from 'react';
import { noop } from '../../../utils/fp';
import { Genre, useListGenresQuery } from '../../../generated/graphql';

interface GenrePreferenceContextType {
  genres: Genre[];
  selectedGenres: number[];
  setSelectedGenres: (value: number[]) => void;
}

interface Props {
  children: ReactNode;
}

const GenrePreferencesContext = createContext<GenrePreferenceContextType>({
  genres: [],
  selectedGenres: [],
  setSelectedGenres: noop,
});

const GenrePreferencesProvider = ({ children }: Props) => {
  const { data } = useListGenresQuery();
  const genres: Genre[] = data?.listGenres || [];
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  return (
    <GenrePreferencesContext.Provider
      value={{
        genres,
        selectedGenres,
        setSelectedGenres,
      }}
    >
      {children}
    </GenrePreferencesContext.Provider>
  );
};

export { GenrePreferencesContext };

export default GenrePreferencesProvider;
