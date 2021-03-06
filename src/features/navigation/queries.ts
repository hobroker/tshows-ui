import { gql } from '@apollo/client';

export const QUERY_LIST_NOTIFICATIONS = gql`
  query ListNotifications {
    listNotifications {
      ...Notification
    }
  }
`;

export const MUTATION_READ_NOTIFICATION = gql`
  mutation ReadNotification($notificationId: Int!) {
    readNotification(input: { notificationId: $notificationId }) {
      __typename
    }
  }
`;

export const MUTATION_READ_ALL_NOTIFICATIONS = gql`
  mutation ReadAllNotifications {
    readAllNotifications {
      __typename
    }
  }
`;

export const SUBSCRIPTION_NOTIFICATIONS_ADDED = gql`
  subscription NotificationsAdded {
    notificationsAdded {
      ...Notification
    }
  }
`;

export const NOTIFICATION_FRAGMENT = gql`
  fragment Notification on Notification {
    id
    isRead
    episode {
      id
      number
      seasonNumber
      name
      airDate
      show {
        externalId
        name
        wideImage
        tallImage
      }
    }
  }
`;
