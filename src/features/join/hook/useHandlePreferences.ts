import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GenrePreferencesContext } from '../../onboarding/contexts/GenrePreferencesContext';
import { ROUTES } from '../../../components/Router';

const useHandlePreferences = () => {
  const { selectedGenres } = useContext(GenrePreferencesContext);
  const navigate = useNavigate();

  return useCallback(() => {
    if (!selectedGenres.length) {
      navigate(ROUTES.ONBOARDING);

      return;
    }

    navigate(ROUTES.HOME);
  }, [navigate, selectedGenres]);
};

export default useHandlePreferences;
