import React, { useContext } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { ShowPreferencesContext } from '../contexts/ShowPreferencesContext';
import useOnMount from '../../../hooks/useOnMount';

const ShowsOnboarding = () => {
  const { fetchShows, shows } = useContext(ShowPreferencesContext);

  const canRender = shows.length;

  useOnMount(fetchShows);

  return (
    <Box>
      <ul>
        {canRender ? (
          shows.map((show) => <li key={show.externalId}>{show.name}</li>)
        ) : (
          <CircularProgress />
        )}
      </ul>
    </Box>
  );
};

export default ShowsOnboarding;
