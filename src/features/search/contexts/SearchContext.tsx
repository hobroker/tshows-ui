import { createContext, ReactNode, useEffect, useState } from 'react';
import { noop } from '../../../utils/fp';
import useDebounce from '../../../hooks/useDebounce';

interface ContextType {
  search: string;
  setSearch: (search: string) => void;
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const SearchContext = createContext<ContextType>({
  search: '',
  setSearch: noop,
  loading: false,
});

const SearchProvider = ({ children }: Props) => {
  const [search, setSearch] = useState('');
  const searchShows = useDebounce(() => {
    //
  });

  useEffect(() => searchShows, [searchShows]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        loading: false,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext };

export default SearchProvider;
