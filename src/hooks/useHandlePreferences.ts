import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../components/Router';
import { GenrePreferencesContext } from '../features/onboarding/contexts/GenrePreferencesContext';

const useHandlePreferences = () => {
  const { setSelectedGenres } = useContext(GenrePreferencesContext);
  const navigate = useNavigate();

  return useCallback(
    ({ genreIds }: { genreIds: number[] }) => {
      if (!genreIds.length) {
        navigate(ROUTES.ONBOARDING);

        return;
      }

      setSelectedGenres(genreIds);

      navigate(ROUTES.HOME);
    },
    [navigate, setSelectedGenres],
  );
};

export default useHandlePreferences;
