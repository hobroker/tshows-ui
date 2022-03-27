import { gql } from '@apollo/client';

export const QUERY_LIST_GENRES = gql`
  query ListGenres {
    listGenres {
      externalId
      name
    }
  }
`;

export const MUTATION_SAVE_PREFERENCES = gql`
  mutation SavePreferences($genreIds: [Int!]!) {
    savePreferences(input: { genreIds: $genreIds }) {
      __typename
    }
  }
`;

export const QUERY_GET_PREFERENCES = gql`
  query GetPreferences {
    getPreferences {
      genreIds
    }
  }
`;
