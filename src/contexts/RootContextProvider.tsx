import { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import { combineComponents } from '../utils/react';
import UserProvider from '../features/user/contexts/UserContext';
import PreferencesProvider from '../features/user/contexts/PreferencesContext';
import BackdropProvider from './BackdropContext';

const RootContextProvider = combineComponents(
  ...([
    BackdropProvider,
    SnackbarProvider,
    PreferencesProvider,
    UserProvider,
  ] as FC[]),
);

export default RootContextProvider;
