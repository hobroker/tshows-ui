import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ShowPageContext } from '../../contexts/ShowPageContext';

const ShowTitle = () => {
  const { show } = useContext(ShowPageContext);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Typography variant="h2" color="white" sx={{ fontWeight: 'bold' }}>
        {show.name}
      </Typography>
    </Box>
  );
};

export default ShowTitle;
