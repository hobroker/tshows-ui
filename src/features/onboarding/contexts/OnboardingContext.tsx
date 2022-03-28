import { FC } from 'react';
import { combineComponents } from '../../../utils/react';
import GenrePreferencesProvider from './GenrePreferencesContext';
import PreferencesProvider from './PreferencesContext';
import ShowPreferencesProvider from './ShowPreferencesContext';

const OnboardingProvider = combineComponents(
  ...([
    GenrePreferencesProvider,
    ShowPreferencesProvider,
    PreferencesProvider,
  ] as FC[]),
);

export default OnboardingProvider;
