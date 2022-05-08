import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import SearchInput from './SearchInput';
import SearchContent from './SearchContent';

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <SearchInput onSearch={setSearch} search={search}>
      <SearchContent />
    </SearchInput>
  );
};

export default Search;
