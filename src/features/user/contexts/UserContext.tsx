import { createContext, ReactNode, useCallback, useState } from 'react';
import { useMeLazyQuery, User } from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { UserState } from '../constants';
import useOnMount from '../../../hooks/useOnMount';

interface UserContextType {
  userState: UserState;
  user: Partial<User> | null;
  resetUser: () => void;
  refreshUser: () => Promise<void>;
  setUserState: (value: UserState) => void;
}

interface Props {
  children: ReactNode;
}

const UserContext = createContext<UserContextType>({
  userState: UserState.Idle,
  user: null,
  resetUser: noop,
  refreshUser: () => Promise.resolve(),
  setUserState: noop,
});

const UserProvider = ({ children }: Props) => {
  const [fetchUser] = useMeLazyQuery();
  const [user, setUser] = useState<UserContextType['user']>(null);
  const [userState, setUserState] = useState<UserState>(UserState.Idle);
  const resetUser = useCallback(() => {
    setUser(null);
    setUserState(UserState.Anonymous);
  }, [setUser]);

  const refreshUser = useCallback(async () => {
    try {
      const { data } = await fetchUser();
      const user = data?.me;

      if (!user) {
        throw Error();
      }

      setUser(user);
      setUserState(UserState.LoggedIn);
    } catch (e) {
      setUserState(UserState.Anonymous);
    }
  }, [fetchUser]);

  useOnMount(refreshUser);

  return (
    <UserContext.Provider
      value={{ user, resetUser, userState, refreshUser, setUserState }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };

export default UserProvider;
