import { gql } from '@apollo/client';

export const QUERY_LIST_UP_NEXT = gql`
  query ListUpNext {
    listUpNext {
      ...Episode
    }
  }
`;
