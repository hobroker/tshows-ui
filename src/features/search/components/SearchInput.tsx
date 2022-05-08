import React, { ChangeEvent, PropsWithChildren, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { Box, OutlinedInput, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled(Box)`
  padding-inline: ${({ theme }) => theme.spacing(2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchOverlay = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2)};
  max-height: 200px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

const StyledInputBase = styled(OutlinedInput)`
  color: ${({ theme }) => theme.palette.text.primary};
  width: 100%;
  z-index: 1;
  & .MuiInputBase-input {
    padding: ${({ theme }) => theme.spacing(1.5, 1, 1.5, 0)};
    padding-left: calc(1rem + ${({ theme }) => theme.spacing(4)});
  }
`;

interface Props {
  onSearch: (search: string) => void;
  search: string;
}

const SearchInput = ({
  onSearch,
  search,
  children,
}: PropsWithChildren<Props>) => {
  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => onSearch(value),
    [onSearch],
  );

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
      {search && <SearchOverlay>{children}</SearchOverlay>}
    </Box>
  );
};

export default SearchInput;
