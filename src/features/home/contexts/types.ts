import { EpisodeFragment } from '../../../generated/graphql';

export type EpisodeType = EpisodeFragment & {
  loading?: boolean;
};
