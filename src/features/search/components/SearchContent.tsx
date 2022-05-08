import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import IndefiniteLoading, {
  IndefiniteLoadingSize,
} from '../../../components/IndefiniteLoading';

const SearchContent = () => {
  const { loading, search } = useContext(SearchContext);

  if (loading) {
    return <IndefiniteLoading size={IndefiniteLoadingSize.Small} />;
  }

  if (search.length === 0) {
    return null;
  }

  return <Box>dsada</Box>;
};

export default SearchContent;
