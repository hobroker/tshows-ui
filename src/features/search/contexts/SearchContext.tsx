import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { noop } from '../../../utils/fp';
import {
  SearchShowFragment,
  useSearchLazyQuery,
} from '../../../generated/graphql';

interface ContextType {
  query: string;
  setQuery: (search: string) => void;
  results: SearchShowFragment[];
  loading: boolean;
  reset: () => void;
}

interface Props {
  children: ReactNode;
}

const SearchContext = createContext<ContextType>({
  query: '',
  setQuery: noop,
  results: [],
  loading: false,
  reset: noop,
});

const SearchProvider = ({ children }: Props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchShowFragment[]>([]);
  const [searchShowsQuery, { data, loading }] = useSearchLazyQuery();
  const reset = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  useEffect(() => {
    if (!query.length) {
      setResults([]);

      return;
    }

    searchShowsQuery({ variables: { query: query } });
  }, [query, searchShowsQuery]);

  useEffect(() => {
    if (!data) return;
    setResults(data.search);
  }, [data]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        loading,
        results,
        reset,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext };

export default SearchProvider;
