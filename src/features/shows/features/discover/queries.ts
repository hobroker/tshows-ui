import { gql } from '@apollo/client';

export const QUERY_LIST_RECOMMENDATIONS = gql`
  query ListRecommendations($genreIds: [Int!]) {
    listRecommendations(input: { genreIds: $genreIds }) {
      ...ShowSummary
    }
  }
`;
