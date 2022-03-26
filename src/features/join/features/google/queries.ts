import { gql } from '@apollo/client';

export const MUTATION_JOIN_WITH_GOOGLE = gql`
  mutation JoinWithGoogle($input: JoinWithGoogleInput!) {
    joinWithGoogle(input: $input) {
      name
      email
    }
  }
`;
