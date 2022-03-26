import { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import { combineComponents } from '../utils/react';
import UserProvider from '../features/user/contexts/UserContext';

const providers = [UserProvider, SnackbarProvider] as FC[];

const RootContextProvider = combineComponents(...providers);

export default RootContextProvider;
