import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ShowPreferencesContext } from '../contexts/ShowPreferencesContext';
import ShowCard from './ShowCard';
const StyledWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;

const ShowsOnboarding = () => {
  const { shows } = useContext(ShowPreferencesContext);

  const canRender = shows.length;

  return (
    <StyledWrapper>
      {canRender ? (
        shows.map(({ externalId, name, tallImage }) => (
          <ShowCard
            key={externalId}
            externalId={externalId}
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
