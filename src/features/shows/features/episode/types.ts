import { EpisodeWithShowFragment } from '../../../../generated/graphql';

export type EpisodeWithShowType = EpisodeWithShowFragment & {
  loading?: boolean;
};

export interface EpisodeActionProps {
  isWatched: boolean;
  episodeId: number;
}
