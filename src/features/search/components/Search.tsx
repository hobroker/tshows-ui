import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import useDebounce from '../../../hooks/useDebounce';
import SearchInput from './SearchInput';
import SearchContent from './SearchContent';

const Search = () => {
  const { setQuery } = useContext(SearchContext);
  const [value, setValue] = useState('');
  const debouncedQuery = useDebounce(value);

  useEffect(() => setQuery(debouncedQuery), [debouncedQuery, setQuery]);

  return (
    <SearchInput onSearch={setValue} value={value}>
      <SearchContent />
    </SearchInput>
  );
};

export default Search;
