import React, { useContext } from 'react';
import { Chip, CircularProgress, Stack } from '@mui/material';
import { GenresContext } from '../../genres/contexts/GenresContext';
import { PreferencesContext } from '../../preferences/contexts/PreferencesContext';

const GenresOnboarding = () => {
  const { selectedGenres, toggleGenrePreference } =
    useContext(PreferencesContext);
  const { genres } = useContext(GenresContext);
  const onToggle = (value: number) => toggleGenrePreference(value);
  const canRender = genres.length;

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
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
