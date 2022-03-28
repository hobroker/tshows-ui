import { gql } from '@apollo/client';

export const QUERY_LIST_GENRES = gql`
  query ListGenres {
    listGenres {
      externalId
      name
    }
  }
`;

export const QUERY_LIST_SHOW_SUGESTIONS = gql`
  query DiscoverShows($genreIds: [Int!]!) {
    discoverShows(input: { genreIds: $genreIds }) {
      externalId
      name
      description
      wideImage
      tallImage
      genres {
        externalId
        name
      }
    }
  }
`;

export const MUTATION_SAVE_PREFERENCES = gql`
  mutation SavePreferences($genreIds: [Int!]!, $showIds: [Int!]!) {
    savePreferences(input: { genreIds: $genreIds, showIds: $showIds }) {
      __typename
    }
  }
`;

export const QUERY_GET_PREFERENCES = gql`
  query GetPreferences {
    getPreferences {
      genres {
        externalId
      }
      shows {
        externalId
      }
    }
  }
`;
