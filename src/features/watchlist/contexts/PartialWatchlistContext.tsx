import { createContext, ReactNode, useCallback, useContext } from 'react';
import { noop } from '../../../utils/fp';
import {
  Status,
  useUpsertWatchlistItemMutation,
} from '../../../generated/graphql';
import { ShowsOnboardingContext } from '../../onboarding/contexts/ShowsOnboardingContext';

interface UpsertWatchlistItemArgs {
  showId: number;
  status: Status;
}

interface ShowPreferenceContextType {
  upsertWatchlistItem: (args: UpsertWatchlistItemArgs) => void;
}

interface Props {
  children: ReactNode;
}

const PartialWatchlistContext = createContext<ShowPreferenceContextType>({
  upsertWatchlistItem: noop,
});

const PartialWatchlistProvider = ({ children }: Props) => {
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

  return (
    <PartialWatchlistContext.Provider value={{ upsertWatchlistItem }}>
      {children}
    </PartialWatchlistContext.Provider>
  );
};

export { PartialWatchlistContext };

export default PartialWatchlistProvider;
