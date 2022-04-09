import React from 'react';
import { PartialShow } from '../../../generated/graphql';
import TallShowCard from './TallShowCard';
import TallCardCollection from './base/TallCardCollection';

interface Props {
  shows: PartialShow[];
  loading: boolean;
}

const TallShowCollection = ({ shows, loading }: Props) => (
  <TallCardCollection loading={loading}>
    {shows.map((show) => (
      <TallShowCard key={show.externalId} show={show} />
    ))}
  </TallCardCollection>
);

export default TallShowCollection;
