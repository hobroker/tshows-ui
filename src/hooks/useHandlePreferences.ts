import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE, WELCOME_ROUTE } from '../constants/routes';
import { PreferencesContext } from '../features/preferences/contexts/PreferencesContext';

const useHandlePreferences = () => {
  const { setSelectedGenres } = useContext(PreferencesContext);
  const navigate = useNavigate();

  return useCallback(
    ({ genreIds }: { genreIds: number[] }) => {
      if (!genreIds.length) {
        navigate(WELCOME_ROUTE);

        return;
      }

      setSelectedGenres(genreIds);

      navigate(HOME_ROUTE);
    },
    [navigate, setSelectedGenres],
  );
};

export default useHandlePreferences;
