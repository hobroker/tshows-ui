import { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import { combineComponents } from '../utils/react';
import UserProvider from '../features/user/contexts/UserContext';
import PreferencesProvider from '../features/user/contexts/PreferencesContext';
import WatchlistProvider from '../features/shows/contexts/WatchlistContext';

const RootContextProvider = combineComponents(
  ...([
    PreferencesProvider,
    WatchlistProvider,
    UserProvider,
    SnackbarProvider,
  ] as FC[]),
);

export default RootContextProvider;
