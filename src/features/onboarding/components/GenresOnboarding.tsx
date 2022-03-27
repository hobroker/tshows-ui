import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import { OnboardingContext } from '../contexts/OnboardingContext';

const GenresOnboarding = () => {
  const { genres, selectedGenres, setSelectedGenres } =
    useContext(OnboardingContext);
  const onToggle = (value: number) =>
    setSelectedGenres({
      ...selectedGenres,
      [value]: !selectedGenres[value],
    });

  return (
    <Box>
      {genres.map(({ name, externalId }) => (
        <Button
          key={externalId}
          onClick={() => onToggle(externalId)}
          variant={selectedGenres[externalId] ? 'contained' : 'outlined'}
          sx={{ mr: 1, mb: 1 }}
        >
          {name}
        </Button>
      ))}
    </Box>
  );
};

export default GenresOnboarding;
