import React, { useContext } from 'react';
import { Box, Button, Chip, CircularProgress, Stack } from '@mui/material';
import { toggleListItem } from '../../../utils/fp';
import { GenrePreferencesContext } from '../contexts/GenrePreferencesContext';

const GenresOnboarding = () => {
  const { genres, selectedGenres, setSelectedGenres } = useContext(
    GenrePreferencesContext,
  );
  const onToggle = (value: number) => {
    setSelectedGenres(toggleListItem(value, selectedGenres));
  };
  const canRender = genres.length;

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {canRender ? (
        genres.map(({ name, externalId }) => {
          const isSelected = selectedGenres.includes(externalId);

          return (
            <Chip
              key={externalId}
              onClick={() => onToggle(externalId)}
              variant={isSelected ? 'filled' : 'outlined'}
              color={isSelected ? 'primary' : 'default'}
              sx={{ mr: 1, mb: 1 }}
              label={name}
            />
          );
        })
      ) : (
        <CircularProgress />
      )}
    </Stack>
  );
};

export default GenresOnboarding;