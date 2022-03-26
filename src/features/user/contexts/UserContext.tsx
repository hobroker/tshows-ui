import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useMeQuery, User } from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import { UserState } from '../constants';

interface UserContextType {
  userState: UserState;
  user: Partial<User> | null;
  resetUser: () => void;
}

interface Props {
  children: ReactNode;
}

const UserContext = createContext<UserContextType>({
  userState: UserState.Idle,
  user: null,
  resetUser: noop,
});

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserContextType['user']>(null);
  const [userState, setUserState] = useState<UserState>(UserState.Idle);
  const resetUser = useCallback(() => setUser(null), [setUser]);
  const { data, error } = useMeQuery();

  useEffect(() => {
    if (error) {
      setUserState(UserState.Anonymous);
    }
  }, [error]);

  useEffect(() => {
    if (data?.me) {
      setUser(data?.me as User);
      setUserState(UserState.LoggedIn);
    }
  }, [data, setUser]);

  return (
    <UserContext.Provider value={{ user, resetUser, userState }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };

export default UserProvider;
