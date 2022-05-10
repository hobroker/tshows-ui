import { gql } from '@apollo/client';

export const QUERY_GET_SIMILAR_SHOWS = gql`
  query GetSimilarShows($externalId: Int!) {
    getSimilarShows(input: { externalId: $externalId }) {
      ...ShowSummary
    }
  }
`;
