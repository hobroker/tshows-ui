import { Status } from '../../generated/graphql';

export const ShowStatusToggleMap = {
  [Status.InWatchlist]: Status.None,
  [Status.None]: Status.InWatchlist,
  [Status.StoppedWatching]: Status.InWatchlist,
  [Status.FinishedWatching]: Status.StoppedWatching,
} as const;
