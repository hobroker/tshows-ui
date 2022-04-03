import { gql } from '@apollo/client';

export const QUERY_LIST_GENRES = gql`
  query ListGenres {
    listGenres {
      externalId
      name
    }
  }
`;
