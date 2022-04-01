import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PreferencesContext } from '../features/user/contexts/PreferencesContext';
import { HOME_ROUTE, ONBOARDING_ROUTE } from '../constants/routes';

const useHandlePreferences = () => {
  const { setSelectedGenres } = useContext(PreferencesContext);
  const navigate = useNavigate();

  return useCallback(
    ({ genreIds }: { genreIds: number[] }) => {
      if (!genreIds.length) {
        navigate(ONBOARDING_ROUTE);

        return;
      }

      setSelectedGenres(genreIds);

      navigate(HOME_ROUTE);
    },
    [navigate, setSelectedGenres],
  );
};

export default useHandlePreferences;
