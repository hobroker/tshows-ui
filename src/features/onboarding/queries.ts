import { gql } from '@apollo/client';

export const QUERY_LIST_SHOW_SUGESTIONS = gql`
  query DiscoverShows($genreIds: [Int!]!) {
    discoverShows(input: { genreIds: $genreIds }) {
      ...ShowFragment
    }
  }
`;
