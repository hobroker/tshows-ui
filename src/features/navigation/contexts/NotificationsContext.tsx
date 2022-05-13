import { createContext, ReactNode } from 'react';
import {
  NotificationFragment,
  useListNotificationsQuery,
} from '../../../generated/graphql';

interface NavigationContextType {
  notifications: NotificationFragment[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const NotificationsContext = createContext<NavigationContextType>({
  notifications: [],
  loading: true,
});

const NotificationsProvider = ({ children }: Props) => {
  const { data, loading } = useListNotificationsQuery();

  return (
    <NotificationsContext.Provider
      value={{
        notifications: data?.listNotifications || [],
        loading,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext };

export default NotificationsProvider;
