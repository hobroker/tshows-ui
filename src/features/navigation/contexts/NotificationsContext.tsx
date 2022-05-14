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
  useNotificationsAddedSubscription,
  useReadAllNotificationsMutation,
  useReadNotificationMutation,
} from '../../../generated/graphql';
import { noop } from '../../../utils/fp';
import useAlert from '../../../hooks/useAlert';

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
  const { notifyInfo } = useAlert();
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

  const { data: subscription, loading: subscriptionWaiting } =
    useNotificationsAddedSubscription();

  useEffect(() => {
    if (
      subscriptionWaiting ||
      !subscription ||
      !subscription.notificationsAdded.length
    ) {
      return;
    }

    notifyInfo(
      `You have ${subscription.notificationsAdded.length} new notifications`,
    );
    setNotifications((data) => [...subscription.notificationsAdded, ...data]);
  }, [notifyInfo, subscription, subscriptionWaiting]);

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
