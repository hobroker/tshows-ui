import { Box } from '@mui/material';
import { useContext } from 'react';
import { ShowPageContext } from '../contexts/ShowPageContext';

const ShowContent = () => {
  const { show } = useContext(ShowPageContext);

  return (
    <Box>
      <h1>{show?.name}</h1>
      <p>{show?.description}</p>
      <p>{show?.description}</p>
      <p>{show?.description}</p>
      <p>{show?.description}</p>
      <p>{show?.description}</p>
    </Box>
  );
};

export default ShowContent;
