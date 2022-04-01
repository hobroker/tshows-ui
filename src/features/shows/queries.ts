import { gql } from '@apollo/client';

export const MUTATION_UPSERT_WATCHLIST_ITEM = gql`
  mutation UpsertWatchlistItem($showId: Int!, $status: Status!) {
    upsertWatchlistItem(input: { showId: $showId, status: $status }) {
      __typename
    }
  }
`;
