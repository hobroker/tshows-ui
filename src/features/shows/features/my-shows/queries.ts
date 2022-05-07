import { gql } from '@apollo/client';

export const QUERY_GET_MY_SHOWS = gql`
  query GetMyShows {
    getMyShows {
      ...PartialShow
    }
  }
`;
