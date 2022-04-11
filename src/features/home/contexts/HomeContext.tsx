import { FC } from 'react';
import { combineComponents } from '../../../utils/react';
import UpNextProvider from './UpNextContext';
import UpcomingProvider from './UpcomingContext';

const HomeProvider = combineComponents(
  ...([UpNextProvider, UpcomingProvider] as FC[]),
);

export default HomeProvider;
