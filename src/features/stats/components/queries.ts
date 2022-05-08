import { gql } from '@apollo/client';

export const QUERY_GET_STATS_SUMMARY = gql`
  query GetStatsSummary {
    getStatsSummary {
      key
      value
    }
  }
`;

export const QUERY_GET_STATS_PAGE_DATA = gql`
  query GetStatsPageData {
    getStatsCalendar {
      day
      value
    }

    getStatsGenres {
      id
      value
      label
    }
  }
`;
