import { FC } from 'react';
import { combineComponents } from '../../../utils/react';
import UpNextProvider from './UpNextContext';

const HomeProvider = combineComponents(...([UpNextProvider] as FC[]));

export default HomeProvider;
