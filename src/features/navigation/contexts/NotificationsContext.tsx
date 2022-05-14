import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  NotificationFragment,
  useListNotificationsQuery,
  useReadNotificationMutation,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';

interface NavigationContextType {
  notifications: NotificationFragment[];
  readNotification: (notificationId: number) => void;
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const NotificationsContext = createContext<NavigationContextType>({
  notifications: [],
  loading: true,
  readNotification: noop,
});

const NotificationsProvider = ({ children }: Props) => {
  const { data, loading } = useListNotificationsQuery();
  const [readNotificationMutation] = useReadNotificationMutation();
  const [notifications, setNotifications] = useState<NotificationFragment[]>(
    [],
  );
  const readNotification = useCallback(
    (notificationId: number) => {
      setNotifications((data) =>
        data.filter(({ id }) => id !== notificationId),
      );
      readNotificationMutation({
        variables: {
          notificationId,
        },
      });
    },
    [readNotificationMutation],
  );

  useEffect(() => {
    if (!data) return;
    setNotifications((shows) => data.listNotifications);
  }, [data]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        loading,
        readNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext };

export default NotificationsProvider;
