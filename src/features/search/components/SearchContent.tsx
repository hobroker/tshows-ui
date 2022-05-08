import React, { useContext } from 'react';
import { Box, List, Typography } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';
import IndefiniteLoading, {
  IndefiniteLoadingSize,
} from '../../../components/IndefiniteLoading';
import ListItemSearchResult from './ListItemSearchResult';

const SearchContent = () => {
  const { loading, query, results } = useContext(SearchContext);

  if (loading) {
    return (
      <Box sx={{ p: 2 }}>
        <IndefiniteLoading size={IndefiniteLoadingSize.Small} />
      </Box>
    );
  }

  if (query.length === 0) {
    return null;
  }

  if (results.length === 0) {
    return (
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">No results found</Typography>
      </Box>
    );
  }

  return (
    <List>
      {results.map(({ externalId, name, wideImage, description }) => (
        <ListItemSearchResult
          key={externalId}
          externalId={externalId}
          name={name}
          wideImage={wideImage}
          description={description}
        />
      ))}
    </List>
  );
};

export default SearchContent;
