import { gql } from '@apollo/client';

export const QUERY_LIST_NOTIFICATIONS = gql`
  query ListNotifications {
    listNotifications {
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
