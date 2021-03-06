import { gql } from '@apollo/client';

export const MUTATION_UPSERT_EPISODE = gql`
  mutation UpsertEpisode($episodeId: Int!, $isWatched: Boolean = true) {
    upsertEpisode(input: { episodeId: $episodeId, isWatched: $isWatched }) {
      ...EpisodeWithShow
    }
  }
`;

export const EPISODE_WITH_SHOW_FRAGMENT = gql`
  fragment EpisodeWithShow on Episode {
    id
    externalId
    number
    seasonNumber
    isWatched
    name
    description
    wideImage
    airDate
    show {
      externalId
      name
      wideImage
      tallImage
    }
  }
`;

export const QUERY_GET_SEASON_EPISODES = gql`
  query GetSeasonEpisodes($showId: Int!, $seasonNumber: Int!) {
    getSeasonEpisodes(input: { showId: $showId, seasonNumber: $seasonNumber }) {
      ...EpisodeWithoutShow
    }
  }
`;

export const EPISODE_WITHOUT_SHOW_FRAGMENT = gql`
  fragment EpisodeWithoutShow on Episode {
    id
    externalId
    number
    seasonNumber
    isWatched
    name
    description
    wideImage
    airDate
  }
`;
