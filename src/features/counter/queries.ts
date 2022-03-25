import { gql } from '@apollo/client';

export const QUERY_GENDERS_LIST = gql`
  query ListGendres {
    genders {
      id
      name
    }
  }
`;
