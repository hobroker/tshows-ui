import React, { ChangeEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(OutlinedInput)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const Search = () => {
  const [search, setSearch] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  return (
    <Box sx={{ position: 'relative' }}>
      <SearchIconWrapper>
        <SearchIcon color="primary" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        value={search}
        onChange={onChange}
      />
    </Box>
  );
};

export default Search;
