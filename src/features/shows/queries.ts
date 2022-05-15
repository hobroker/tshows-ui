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
      episodeRuntime
      isInProduction
      seasons {
        showId
        number
        description
        name
        tallImage
        episodeCount
        airDate
        isFullyWatched
      }
      genres {
        externalId
        name
      }
    }
  }
`;

export const PARTIAL_SHOW_FRAGMENT = gql`
  fragment PartialShow on Show {
    externalId
    name
    description
    wideImage
    tallImage
    firstAirDate
    originCountry
    status
  }
`;

export const PARTIAL_SHOW_SUMMARY_FRAGMENT = gql`
  fragment ShowSummary on Show {
    externalId
    name
    description
    wideImage
    tallImage
  }
`;

export const MUTATION_UPSERT_SEASON_EPISODE = gql`
  mutation UpsertSeasonEpisode($episodeId: Int!, $isWatched: Boolean = true) {
    upsertEpisode(input: { episodeId: $episodeId, isWatched: $isWatched }) {
      __typename
    }
  }
`;

export const MUTATION_TOGGLE_SEASON_IS_FULLY_WATCHED = gql`
  mutation ToggleSeasonIsFullyWatched($showId: Int!, $seasonNumber: Int!) {
    toggleSeasonIsFullyWatched(
      input: { showId: $showId, seasonNumber: $seasonNumber }
    ) {
      __typename
    }
  }
`;
