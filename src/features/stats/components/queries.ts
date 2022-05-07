import { gql } from '@apollo/client';

export const QUERY_GET_STATS_SUMMARY = gql`
  query GetStatsSummary {
    getStatsSummary {
      key
      value
    }
  }
`;
