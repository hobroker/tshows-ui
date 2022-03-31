import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      id
      email
      name
      avatar
    }
    getPreferences {
      genres {
        externalId
      }
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

export const MUTATION_LOGOUT = gql`
  mutation Logout {
    logout {
      __typename
    }
  }
`;
