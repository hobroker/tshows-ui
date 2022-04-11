import { gql } from '@apollo/client';

export const QUERY_LIST_UP_NEXT = gql`
  query ListUpNext {
    listUpNext {
      ...Episode
    }
  }
`;

export const QUERY_LIST_UPCOMING_NEXT = gql`
  query ListUpcoming {
    listUpcoming {
      ...Episode
    }
  }
`;

export const MUTATION_UPSERT_EPISODE = gql`
  mutation UpsertEpisode($episodeId: Int!, $isWatched: Boolean = true) {
    upsertEpisode(input: { episodeId: $episodeId, isWatched: $isWatched }) {
      ...Episode
    }
  }
`;

export const EPISODE_SHOW_FRAGMENT = gql`
  fragment EpisodeShow on PartialShow {
    externalId
    name
    wideImage
    tallImage
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
      ...EpisodeShow
    }
  }
`;
