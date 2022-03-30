import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { UserContext } from '../../user/contexts/UserContext';
import { PreferencesContext } from '../../user/contexts/PreferencesContext';
import useHandlePreferences from '../hook/useHandlePreferences';
import { noop } from '../../../utils/fp';

interface JoinContextType {
  handlePostJoin: () => void;
}

interface Props {
  children: ReactNode;
}

const JoinContext = createContext<JoinContextType>({
  handlePostJoin: noop,
});

const JoinProvider = ({ children }: Props) => {
  const { refreshUser } = useContext(UserContext);
  const { refreshPreferences } = useContext(PreferencesContext);
  const handlePreferences = useHandlePreferences();
  const handlePostJoin = useCallback(async () => {
    await Promise.all([refreshUser(), refreshPreferences()]);

    handlePreferences();
  }, [handlePreferences, refreshPreferences, refreshUser]);

  return (
    <JoinContext.Provider value={{ handlePostJoin }}>
      {children}
    </JoinContext.Provider>
  );
};

export { JoinContext };

export default JoinProvider;
