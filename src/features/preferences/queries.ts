import { gql } from '@apollo/client';

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
