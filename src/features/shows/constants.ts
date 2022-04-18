import { Status } from '../../generated/graphql';

export const ShowStatusToggleMap = {
  [Status.InWatchlist]: Status.None,
  [Status.None]: Status.InWatchlist,
  [Status.StoppedWatching]: Status.InWatchlist,
} as const;
