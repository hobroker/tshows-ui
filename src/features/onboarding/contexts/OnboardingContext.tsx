import { FC } from 'react';
import { combineComponents } from '../../../utils/react';
import GenrePreferencesProvider from './GenrePreferencesContext';
import PreferencesProvider from '../../user/contexts/PreferencesContext';

const OnboardingProvider = combineComponents(
  ...([GenrePreferencesProvider, PreferencesProvider] as FC[]),
);

export default OnboardingProvider;
