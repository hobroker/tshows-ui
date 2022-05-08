import { gql } from '@apollo/client';

export const QUERY_SEARCH = gql`
  query Search($query: String!) {
    search(input: { query: $query }) {
      ...SearchShow
    }
  }
`;

export const PARTIAL_SEARCH_SHOW_FRAGMENT = gql`
  fragment SearchShow on PartialShow {
    externalId
    name
    description
    wideImage
  }
`;
