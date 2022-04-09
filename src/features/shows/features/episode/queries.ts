import { gql } from '@apollo/client';

export const QUERY_LIST_UP_NEXT = gql`
  query ListUpNext {
    listUpNext {
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
