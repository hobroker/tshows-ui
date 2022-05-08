import { gql } from '@apollo/client';

export const QUERY_GET_STATS_SUMMARY = gql`
  query GetStatsSummary {
    getStatsSummary {
      key
      value
    }
  }
`;

export const QUERY_GET_STATS_CALENDAR = gql`
  query GetStatsCalendar {
    getStatsCalendar {
      day
      value
    }
  }
`;

export const QUERY_GET_STATS_GENRES = gql`
  query GetStatsGenres {
    getStatsGenres {
      id
      value
      label
    }
  }
`;
