import { useCallback, useContext } from 'react';
import {
  Status,
  useUpsertWatchlistItemMutation,
} from '../../../generated/graphql';
import { ShowsOnboardingContext } from '../../onboarding/contexts/ShowsOnboardingContext';

interface UpsertWatchlistItemArgs {
  showId: number;
  status: Status;
}

const useWatchlistActions = () => {
  const [upsertWatchlistItemMutation] = useUpsertWatchlistItemMutation();
  const { updateShow } = useContext(ShowsOnboardingContext);

  const upsertWatchlistItem = useCallback(
    ({ showId, status }: UpsertWatchlistItemArgs) => {
      upsertWatchlistItemMutation({
        variables: {
          showId,
          status,
        },
      });
      updateShow(showId, { status });
    },
    [updateShow, upsertWatchlistItemMutation],
  );

  return { upsertWatchlistItem };
};

export default useWatchlistActions;
