import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../features/router/constants';
import { PreferencesContext } from '../features/preferences/contexts/PreferencesContext';

const useHandlePreferences = () => {
  const { setSelectedGenres } = useContext(PreferencesContext);
  const navigate = useNavigate();

  return useCallback(
    ({ genreIds }: { genreIds: number[] }) => {
      if (!genreIds.length) {
        navigate(RoutePath.Welcome);

        return;
      }

      setSelectedGenres(genreIds);

      navigate(RoutePath.Home);
    },
    [navigate, setSelectedGenres],
  );
};

export default useHandlePreferences;
