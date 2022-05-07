import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { ShowPageContext } from '../../../contexts/ShowPageContext';

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-wrap: wrap;
`;

const GenresList = () => {
  const { show } = useContext(ShowPageContext);
  const { genres } = show;

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
