import { gql } from '@apollo/client';

export const QUERY_GET_RATING = gql`
  query GetRating($showId: Int!) {
    getRating(input: { showId: $showId }) {
      rating
    }
  }
`;

export const MUTATION_UPDATE_RATING = gql`
  mutation UpdateRating($showId: Int!, $rating: Int!) {
    updateRating(input: { showId: $showId, rating: $rating }) {
      __typename
    }
  }
`;
