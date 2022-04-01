import { createContext, ReactNode, useCallback } from 'react';
import { noop } from '../../../utils/fp';
import {
  Status,
  useUpsertWatchlistItemMutation,
} from '../../../generated/graphql';

interface UpsertWatchlistItemArgs {
  showId: number;
  status: Status;
}

interface ShowPreferenceContextType {
  watchlist: number[];
  upsertWatchlistItem: (args: UpsertWatchlistItemArgs) => void;
}

interface Props {
  children: ReactNode;
}

const WatchlistContext = createContext<ShowPreferenceContextType>({
  watchlist: [],
  upsertWatchlistItem: noop,
});

const WatchlistProvider = ({ children }: Props) => {
  const watchlist: number[] = [];
  const [upsertWatchlistItemMutation] = useUpsertWatchlistItemMutation();

  const upsertWatchlistItem = useCallback(
    ({ showId, status }: UpsertWatchlistItemArgs) => {
      upsertWatchlistItemMutation({
        variables: {
          showId,
          status,
        },
      });
    },
    [upsertWatchlistItemMutation],
  );

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        upsertWatchlistItem,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export { WatchlistContext };

export default WatchlistProvider;
