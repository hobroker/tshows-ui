import { gql } from '@apollo/client';

export const MUTATION_UPSERT_EPISODE = gql`
  mutation UpsertEpisode($episodeId: Int!, $isWatched: Boolean = true) {
    upsertEpisode(input: { episodeId: $episodeId, isWatched: $isWatched }) {
      ...Episode
    }
  }
`;

export const EPISODE_FRAGMENT = gql`
  fragment Episode on Episode {
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
