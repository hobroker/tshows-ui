import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      id
      email
      name
      avatar
    }
  }
`;
