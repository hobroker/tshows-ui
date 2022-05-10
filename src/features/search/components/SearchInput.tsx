import React, {
  ChangeEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { styled } from '@mui/material/styles';
import { Box, ClickAwayListener, OutlinedInput, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';

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
  max-height: 300px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow-y: scroll;
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
  value: string;
}

const SearchInput = ({
  onSearch,
  value,
  children,
}: PropsWithChildren<Props>) => {
  const { pathname } = useLocation();
  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => onSearch(value),
    [onSearch],
  );
  const [isFocused, setIsFocused] = useState(false);
  const isOverlayOpen = !!value && isFocused;
  const onFocus = useCallback(() => setIsFocused(true), []);
  const onBlur = useCallback(() => setIsFocused(false), []);

  useEffect(() => onSearch(''), [onSearch, pathname]);

  return (
    <ClickAwayListener onClickAway={onBlur}>
      <Box sx={{ position: 'relative' }}>
        <SearchIconWrapper>
          <SearchIcon color="primary" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
        <SearchOverlay
          sx={{ display: isOverlayOpen ? 'initial' : 'none' }}
          elevation={8}
        >
          {children}
        </SearchOverlay>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchInput;
