import { gql } from '@apollo/client';

export const QUERY_SEARCH = gql`
  query Search($query: String!) {
    search(input: { query: $query }) {
      ...ShowSummary
    }
  }
`;
