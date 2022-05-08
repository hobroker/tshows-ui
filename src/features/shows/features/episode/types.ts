import { EpisodeWithShowFragment } from '../../../../generated/graphql';

export type EpisodeWithLoading = EpisodeWithShowFragment & {
  loading?: boolean;
};

export interface EpisodeActionProps {
  isWatched: boolean;
  episodeId: number;
}
