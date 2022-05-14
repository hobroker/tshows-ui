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
  useReadAllNotificationsMutation,
  useReadNotificationMutation,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';

interface NavigationContextType {
  notifications: NotificationFragment[];
  readNotification: (notificationId: number) => void;
  readAllNotifications: () => void;
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const NotificationsContext = createContext<NavigationContextType>({
  notifications: [],
  loading: true,
  readNotification: noop,
  readAllNotifications: noop,
});

const NotificationsProvider = ({ children }: Props) => {
  const { data, loading } = useListNotificationsQuery();
  const [readNotificationMutation] = useReadNotificationMutation();
  const [readAllNotificationsMutation] = useReadAllNotificationsMutation();
  const [notifications, setNotifications] = useState<NotificationFragment[]>(
    [],
  );
  const readNotification = useCallback(
    (notificationId: number) => {
      setNotifications((data) =>
        data.filter(({ id }) => id !== notificationId),
      );

      return readNotificationMutation({ variables: { notificationId } });
    },
    [readNotificationMutation],
  );
  const readAllNotifications = useCallback(() => {
    setNotifications([]);

    return readAllNotificationsMutation();
  }, [readAllNotificationsMutation]);

  useEffect(() => {
    if (!data) return;
    setNotifications(data.listNotifications);
  }, [data]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        loading,
        readNotification,
        readAllNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext };

export default NotificationsProvider;
