import React from 'react';
import { PartialShow } from '../../../generated/graphql';
import TallShowCard from './TallShowCard';
import TallCardCollection from './base/TallCardCollection';

interface Props {
  shows: PartialShow[];
  loading: boolean;
}

const TallShowCardCollection = ({ shows, loading }: Props) => (
  <TallCardCollection loading={loading}>
    {shows.map(({ externalId, name, tallImage, status }) => (
      <TallShowCard
        key={externalId}
        externalId={externalId}
        name={name}
        tallImage={tallImage}
        status={status}
      />
    ))}
  </TallCardCollection>
);

export default TallShowCardCollection;
