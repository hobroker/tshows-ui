import { createContext, ReactNode, useState } from 'react';
import { noop } from '../../../utils/fp';
import {
  Genre,
  useGetPreferencesLazyQuery,
  useGetPreferencesQuery,
  useListGenresQuery,
  useSavePreferencesMutation,
} from '../../../generated/graphql';
import useOnMount from '../../../hooks/useOnMount';

interface OnboardingContextType {
  genres: Genre[];
  selectedGenres: Record<string, boolean>;
  setSelectedGenres: (selectedGenres: Record<number, boolean>) => void;
  savePreferences: () => void;
}

interface Props {
  children: ReactNode;
}

const OnboardingContext = createContext<OnboardingContextType>({
  genres: [],
  selectedGenres: {},
  setSelectedGenres: noop,
  savePreferences: noop,
});

const OnboardingProvider = ({ children }: Props) => {
  const { data } = useListGenresQuery();
  const genres: Genre[] = data?.listGenres || [];
  const [selectedGenres, setSelectedGenres] = useState<Record<string, boolean>>(
    {},
  );
  const [savePreferences] = useSavePreferencesMutation({
    variables: {
      genreIds: Object.keys(selectedGenres)
        .filter((key) => selectedGenres[key])
        .map(Number),
    },
  });
  const [getPreferences] = useGetPreferencesLazyQuery();

  useOnMount(async () => {
    try {
      const { data } = await getPreferences();
      const genreIds = data?.getPreferences?.genreIds;

      if (genreIds) {
        setSelectedGenres(
          genreIds.reduce(
            (acc: Record<string, boolean>, genreId: string) => ({
              ...acc,
              [genreId]: true,
            }),
            {},
          ),
        );
      }
    } catch (e) {}
  });

  return (
    <OnboardingContext.Provider
      value={{
        genres,
        selectedGenres,
        setSelectedGenres,
        savePreferences,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export { OnboardingContext };

export default OnboardingProvider;
