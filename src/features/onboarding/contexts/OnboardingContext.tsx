import { FC } from 'react';
import { combineComponents } from '../../../utils/react';
import GenrePreferencesProvider from './GenrePreferencesContext';

const OnboardingProvider = combineComponents(
  ...([GenrePreferencesProvider] as FC[]),
);

export default OnboardingProvider;
