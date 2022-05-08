import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import SearchInput from './SearchInput';
import SearchContent from './SearchContent';

const Search = () => {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <SearchInput onSearch={setQuery} search={query}>
      <SearchContent />
    </SearchInput>
  );
};

export default Search;
