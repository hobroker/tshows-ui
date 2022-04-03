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
      ...ShowFragment
    }
  }
`;

export const MUTATION_TOGGLE_GENRE_PREFERENCE = gql`
  mutation ToggleGenrePreference($genreId: Int!) {
    toggleGenrePreference(input: { genreId: $genreId }) {
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
    }
  }
`;
