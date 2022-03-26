import { gql } from '@apollo/client';

export const MUTATION_LOGOUT = gql`
  mutation Logout {
    logout {
      _
    }
  }
`;

export const MUTATION_REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refresh {
      id
    }
  }
`;
