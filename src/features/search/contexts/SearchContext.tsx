import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { noop } from '../../../utils/fp';
import useDebounce from '../../../hooks/useDebounce';
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
  const { pathname } = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchShowFragment[]>([]);
  const [searchShowsQuery, { data, loading }] = useSearchLazyQuery();
  const debouncedQuery = useDebounce(query);
  const reset = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  useEffect(reset, [reset, pathname]);

  useEffect(() => {
    if (!debouncedQuery.length) {
      setResults([]);

      return;
    }

    searchShowsQuery({ variables: { query: debouncedQuery } });
  }, [debouncedQuery, searchShowsQuery]);

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
