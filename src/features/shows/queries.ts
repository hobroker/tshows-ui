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

export const SHOW_FRAGMENT = gql`
  fragment ShowFragment on PartialShow {
    externalId
    name
    description
    wideImage
    tallImage
    status
    genres {
      externalId
      name
    }
  }
`;
