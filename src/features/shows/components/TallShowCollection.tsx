import React from 'react';
import { PartialShow } from '../../../generated/graphql';
import TallShowCard from './TallShowCard';
import TallCardCollection from './base/TallCardCollection';
import TallCardPlaceholder from './base/TallCardPlaceholder';

interface Props {
  shows: PartialShow[];
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
