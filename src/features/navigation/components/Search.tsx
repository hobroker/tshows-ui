import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  transition: theme.transitions.create('background-color'),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '100%',
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

const Search = () => {
  const [search, setSearch] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  return (
    <Wrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        value={search}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Search;
