import { EpisodeFragment } from '../../../../generated/graphql';

export type EpisodeType = EpisodeFragment & {
  loading?: boolean;
};

export interface ActionProps {
  episode: EpisodeType;
}
