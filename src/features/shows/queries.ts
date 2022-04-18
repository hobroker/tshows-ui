import { gql } from '@apollo/client';

export const MUTATION_UPSERT_WATCHLIST_ITEM = gql`
  mutation UpsertWatchlistItem($showId: Int!, $status: Status!) {
    upsertWatchlistItem(input: { showId: $showId, status: $status }) {
      __typename
    }
  }
`;

export const QUERY_GET_PARTIAL_WATCHLIST = gql`
  query GetPartialWatchlist {
    getWatchlist {
      status
      show {
        externalId
      }
    }
  }
`;

export const QUERY_FULL_SHOW = gql`
  query FullShow($externalId: Int!) {
    fullShow(input: { externalId: $externalId }) {
      externalId
      name
      description
      wideImage
      tallImage
      firstAirDate
      originCountry
      status
      genres {
        externalId
        name
      }
      details {
        episodeRuntime
        isInProduction
        seasons {
          number
          description
          name
          tallImage
        }
      }
    }
  }
`;

export const SHOW_FRAGMENT = gql`
  fragment PartialShow on PartialShow {
    externalId
    name
    description
    wideImage
    tallImage
    firstAirDate
    originCountry
    status
    genres {
      externalId
      name
    }
  }
`;
