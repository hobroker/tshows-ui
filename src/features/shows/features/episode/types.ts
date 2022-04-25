import {
  Episode,
  EpisodeWithShowFragment,
} from '../../../../generated/graphql';

export type EpisodeWithShowType = EpisodeWithShowFragment & {
  loading?: boolean;
};

export type EpisodeWithoutShow = Omit<Episode, 'show'>;

export interface EpisodeActionProps {
  episode: EpisodeWithShowType;
}
