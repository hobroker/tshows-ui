import { gql } from '@apollo/client';

export const QUERY_LIST_UPCOMING_NEXT = gql`
  query ListUpcoming {
    listUpcoming {
      ...Episode
    }
  }
`;
