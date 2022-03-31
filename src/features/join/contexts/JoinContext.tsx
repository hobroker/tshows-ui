import { createContext, ReactNode, useContext } from 'react';
import { UserContext } from '../../user/contexts/UserContext';
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

  return (
    <JoinContext.Provider value={{ handlePostJoin: refreshUser }}>
      {children}
    </JoinContext.Provider>
  );
};

export { JoinContext };

export default JoinProvider;
