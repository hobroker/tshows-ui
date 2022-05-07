import React from 'react';
import { PartialShowFragment } from '../../../generated/graphql';
import TallShowCard from './TallShowCard';
import TallCardCollection from './card/TallCardCollection';
import TallCardPlaceholder from './card/TallCardPlaceholder';

interface Props {
  shows: PartialShowFragment[];
  loading: boolean;
}

const TallShowCollection = ({ shows, loading }: Props) => (
  <TallCardCollection
    loading={loading}
    PlaceholderComponent={TallCardPlaceholder}
  >
    {shows.map((show) => (
      <TallShowCard key={show.externalId} show={show} />
    ))}
  </TallCardCollection>
);

export default TallShowCollection;
