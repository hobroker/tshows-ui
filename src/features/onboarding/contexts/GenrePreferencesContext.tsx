import { createContext, ReactNode } from 'react';
import { Genre, useListGenresQuery } from '../../../generated/graphql';

interface GenrePreferenceContextType {
  genres: Genre[];
}

interface Props {
  children: ReactNode;
}

const GenrePreferencesContext = createContext<GenrePreferenceContextType>({
  genres: [],
});

const GenrePreferencesProvider = ({ children }: Props) => {
  const { data } = useListGenresQuery();
  const genres: Genre[] = data?.listGenres || [];

  return (
    <GenrePreferencesContext.Provider
      value={{
        genres,
      }}
    >
      {children}
    </GenrePreferencesContext.Provider>
  );
};

export { GenrePreferencesContext };

export default GenrePreferencesProvider;
