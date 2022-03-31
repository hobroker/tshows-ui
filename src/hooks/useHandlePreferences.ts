import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../components/Router';
import { PreferencesContext } from '../features/user/contexts/PreferencesContext';

const useHandlePreferences = () => {
  const { setSelectedGenres } = useContext(PreferencesContext);
  const navigate = useNavigate();

  return useCallback(
    ({ genreIds }: { genreIds: number[] }) => {
      console.log('useHandlePreferences genreIds', genreIds);
      if (!genreIds.length) {
        navigate(ROUTES.ONBOARDING);

        return;
      }

      setSelectedGenres(genreIds);

      // navigate(ROUTES.HOME);
    },
    [navigate, setSelectedGenres],
  );
};

export default useHandlePreferences;
