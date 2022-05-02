import React from 'react';
import { SimilarShowFragment } from '../../../../../generated/graphql';
import TallCardPlaceholder from '../../../components/card/TallCardPlaceholder';
import TallCardCollection from '../../../components/card/TallCardCollection';
import SimilarShowCard from './SimilarShowCard';

interface Props {
  shows: SimilarShowFragment[];
  loading: boolean;
}

const SimilarShowsCollection = ({ shows, loading }: Props) => (
  <TallCardCollection
    loading={loading}
    PlaceholderComponent={TallCardPlaceholder}
    scroll
  >
    {shows.map(({ externalId, tallImage, name }) => (
      <SimilarShowCard
        key={externalId}
        externalId={externalId}
        tallImage={tallImage}
        name={name}
      />
    ))}
  </TallCardCollection>
);

export default SimilarShowsCollection;
