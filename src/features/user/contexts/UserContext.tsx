import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { prop } from 'rambda';
import { useMeLazyQuery, User } from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { UserState } from '../constants';
import useOnMount from '../../../hooks/useOnMount';
import useHandlePreferences from '../../../hooks/useHandlePreferences';
import { PreferencesContext } from './PreferencesContext';

interface UserContextType {
  userState: UserState;
  user: Partial<User> | null;
  logout: () => void;
  refreshUser: () => Promise<void>;
  setUserState: (value: UserState) => void;
}

interface Props {
  children: ReactNode;
}

const UserContext = createContext<UserContextType>({
  userState: UserState.Idle,
  user: null,
  logout: noop,
  refreshUser: () => Promise.resolve(),
  setUserState: noop,
});

const UserProvider = ({ children }: Props) => {
  const [fetchUser] = useMeLazyQuery();
  const { setSelectedGenres } = useContext(PreferencesContext);
  const [user, setUser] = useState<UserContextType['user']>(null);
  const [userState, setUserState] = useState<UserState>(UserState.Idle);
  const handlePreferences = useHandlePreferences();
  const logout = useCallback(() => {
    setUser(null);
    setUserState(UserState.Anonymous);
  }, [setUser]);

  const refreshUser = useCallback(async () => {
    try {
      const { data } = await fetchUser();
      const user = data?.me;
      const preferences = data?.getPreferences;

      if (!user) {
        throw Error();
      }

      // setSelectedGenres(preferences?.genres?.map(prop('externalId')) || []);

      setUser(user);
      setUserState(UserState.LoggedIn);

      handlePreferences({
        genreIds: preferences?.genres?.map(prop('externalId')) || [],
      });
    } catch (e) {
      setUserState(UserState.Anonymous);
    }
  }, [fetchUser, handlePreferences, setSelectedGenres]);

  useOnMount(refreshUser);

  return (
    <UserContext.Provider
      value={{ user, logout, userState, refreshUser, setUserState }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };

export default UserProvider;
