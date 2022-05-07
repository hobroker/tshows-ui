import { createContext, ReactNode, useCallback, useState } from 'react';
import { prop } from 'ramda';
import {
  useLogoutMutation,
  useMeLazyQuery,
  User,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { UserState } from '../constants';
import useOnMount from '../../../hooks/useOnMount';
import useHandlePreferences from '../../../hooks/useHandlePreferences';

interface UserContextType {
  userState: UserState;
  user: User | null;
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
  const [logoutMutation] = useLogoutMutation();
  const [user, setUser] = useState<User | null>(null);
  const [userState, setUserState] = useState<UserState>(UserState.Idle);
  const handlePreferences = useHandlePreferences();
  const logout = useCallback(() => {
    setUser(null);
    setUserState(UserState.Anonymous);
    logoutMutation();
  }, [logoutMutation]);

  const refreshUser = useCallback(async () => {
    try {
      const { data } = await fetchUser();
      const user = data?.me;
      const preferences = data?.getPreferences;

      if (!user) {
        throw Error();
      }

      setUser(user);
      setUserState(UserState.LoggedIn);

      handlePreferences({
        genreIds: preferences?.genres.map(prop('externalId')) || [],
      });
    } catch (e) {
      setUserState(UserState.Anonymous);
    }
  }, [fetchUser, handlePreferences]);

  useOnMount(async () => {
    await refreshUser();
  });

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
