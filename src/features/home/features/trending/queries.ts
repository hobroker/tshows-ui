import { gql } from '@apollo/client';

export const QUERY_LIST_TRENDING = gql`
  query ListTrending {
    listTrending {
      ...ShowSummary
    }
  }
`;
