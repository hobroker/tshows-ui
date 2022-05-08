import React from 'react';
import { PartialShowFragment } from '../../../generated/graphql';
import TallCardCollection from '../../shows/components/card/TallCardCollection';
import TallCardPlaceholder from '../../shows/components/card/TallCardPlaceholder';
import OnboardingShowCard from './OnboardingShowCard';

interface Props {
  shows: PartialShowFragment[];
  loading: boolean;
}

const OnboardingShowsCollection = ({ shows, loading }: Props) => (
  <TallCardCollection
    loading={loading}
    PlaceholderComponent={TallCardPlaceholder}
  >
    {shows.map((show) => (
      <OnboardingShowCard key={show.externalId} show={show} />
    ))}
  </TallCardCollection>
);

export default OnboardingShowsCollection;
