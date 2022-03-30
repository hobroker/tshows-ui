import React, { useContext, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ShowPreferencesContext } from '../contexts/ShowPreferencesContext';
import useOnMount from '../../../hooks/useOnMount';
import ShowCard from './ShowCard';
import { GenrePreferencesContext } from '../contexts/GenrePreferencesContext';

const StyledWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;

const ShowsOnboarding = () => {
  const { fetchShows, shows } = useContext(ShowPreferencesContext);
  const { selectedGenres } = useContext(GenrePreferencesContext);

  const canRender = shows.length;

  useEffect(() => {
    if (selectedGenres.length) {
      fetchShows();
    }
  }, [fetchShows, selectedGenres]);

  return (
    <StyledWrapper>
      {canRender ? (
        shows.map(({ externalId, name, tallImage }) => (
          <ShowCard
            key={externalId}
            name={name}
            tallImage={`https://image.tmdb.org/t/p/w500/${tallImage}`}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </StyledWrapper>
  );
};

export default ShowsOnboarding;
