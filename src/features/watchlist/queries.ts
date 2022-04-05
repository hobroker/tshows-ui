import { gql } from '@apollo/client';

export const QUERY_LIST_UP_NEXT = gql`
  query ListUpNext {
    listUpNext {
      externalId
      number
      seasonNumber
      name
      description
      wideImage
      airDate
    }
  }
`;
