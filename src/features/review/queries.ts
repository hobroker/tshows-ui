import { gql } from '@apollo/client';

export const QUERY_GET_RATING = gql`
  query GetRating($showId: Int!) {
    getRating(input: { showId: $showId }) {
      rating
    }
  }
`;

export const QUERY_GET_REVIEWS = gql`
  query GetReviews($showId: Int!) {
    getOtherReviews(input: { showId: $showId }) {
      ...Review
    }
    getMyReview(input: { showId: $showId }) {
      ...Review
    }
  }
`;

export const REVIEW_WITH_USER_FRAGMENT = gql`
  fragment Review on Review {
    id
    rating
    title
    content
    user {
      id
      avatar
      name
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

export const MUTATION_UPSERT_REVIEW = gql`
  mutation UpsertReview(
    $showId: Int!
    $title: String
    $content: String
    $rating: Int
  ) {
    upsertReview(
      input: {
        showId: $showId
        title: $title
        content: $content
        rating: $rating
      }
    ) {
      ...Review
    }
  }
`;
