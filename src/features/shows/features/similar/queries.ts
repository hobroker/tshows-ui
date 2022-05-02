import { gql } from '@apollo/client';

export const QUERY_GET_SIMILAR_SHOWS = gql`
  query GetSimilarShows($externalId: Int!) {
    getSimilarShows(input: { externalId: $externalId }) {
      ...SimilarShow
    }
  }
`;

export const SIMILAR_SHOW_FRAGMENT = gql`
  fragment SimilarShow on PartialShow {
    externalId
    name
    tallImage
  }
`;
