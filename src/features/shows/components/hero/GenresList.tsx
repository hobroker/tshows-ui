import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { ShowPageContext } from '../../contexts/ShowPageContext';

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;

  > * {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

const GenresList = () => {
  const { show } = useContext(ShowPageContext);
  const genres = show?.genres ?? [];

  return (
    <Wrapper>
      {genres.map(({ name, externalId }) => (
        <Box sx={{ color: 'white' }} key={externalId}>
          <Button
            variant="outlined"
            size="small"
            color="inherit"
            sx={{
              fontWeight: 'bold',
              padding: ({ spacing }) => `0 ${spacing(1)}`,
            }}
          >
            {name}
          </Button>
        </Box>
      ))}
    </Wrapper>
  );
};

export default GenresList;
