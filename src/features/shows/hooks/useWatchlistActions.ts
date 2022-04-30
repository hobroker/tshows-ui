import { useCallback, useState } from 'react';
import {
  Status,
  useUpsertWatchlistItemMutation,
} from '../../../generated/graphql';

interface UpsertWatchlistItemArgs {
  showId: number;
  status: Status;
}

const useWatchlistActions = () => {
  const [upsertWatchlistItemMutation] = useUpsertWatchlistItemMutation();
  const [loading, setLoading] = useState(false);

  const upsertWatchlistItem = useCallback(
    async ({ showId, status }: UpsertWatchlistItemArgs) => {
      setLoading(true);
      await upsertWatchlistItemMutation({
        variables: {
          showId,
          status,
        },
      });
      setLoading(false);
    },
    [upsertWatchlistItemMutation],
  );

  return { upsertWatchlistItem, loading };
};

export default useWatchlistActions;
