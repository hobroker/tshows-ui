import { createContext, ReactNode, useState } from 'react';
import { noop } from '../../../utils/fp';

interface NavigationContextType {
  notifications: string[];
  setNotifications: (notifications: string[]) => void;
}

interface Props {
  children: ReactNode;
}

const NavigationContext = createContext<NavigationContextType>({
  notifications: [],
  setNotifications: noop,
});

const NavigationProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<string[]>([
    'one',
    'two',
    'three',
  ]);

  return (
    <NavigationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext };

export default NavigationProvider;
