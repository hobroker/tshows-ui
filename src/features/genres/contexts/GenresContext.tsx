import { createContext, ReactNode } from 'react';
import { Genre, useListGenresQuery } from '../../../generated/graphql';

interface GenrePreferenceContextType {
  genres: Genre[];
}

interface Props {
  children: ReactNode;
}

const GenresContext = createContext<GenrePreferenceContextType>({
  genres: [],
});

const GenresProvider = ({ children }: Props) => {
  const { data } = useListGenresQuery();
  const genres: Genre[] = data?.listGenres || [];

  return (
    <GenresContext.Provider
      value={{
        genres,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export { GenresContext };

export default GenresProvider;
