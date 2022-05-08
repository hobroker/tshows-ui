import { gql } from '@apollo/client';

export const QUERY_LIST_TRENDING = gql`
  query ListTrending($page: Int = 1) {
    listTrending(input: { page: $page }) {
      ...ShowSummary
    }
  }
`;
