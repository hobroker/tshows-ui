import { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import { combineComponents } from '../utils/react';
import UserProvider from '../features/user/contexts/UserContext';

const RootContextProvider = combineComponents(
  ...([UserProvider, SnackbarProvider] as FC[]),
);

export default RootContextProvider;
