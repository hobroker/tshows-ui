import { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import { combineComponents } from '../utils/react';
import UserProvider from '../features/user/contexts/UserContext';
import PreferencesProvider from '../features/user/contexts/PreferencesContext';

const RootContextProvider = combineComponents(
  ...([PreferencesProvider, UserProvider, SnackbarProvider] as FC[]),
);

export default RootContextProvider;
