import React from 'react';
import { PartialShow } from '../../../generated/graphql';
import TallCardPlaceholder from '../components/card/TallCardPlaceholder';
import TallCardCollection from '../components/card/TallCardCollection';
import TallShowCard from '../components/TallShowCard';

interface Props {
  shows: Pick<PartialShow, 'externalId' | 'tallImage' | 'name'>[];
  loading?: boolean;
  scroll: boolean;
}

const ShowsCollection = ({ shows, loading = false, scroll }: Props) => (
  <TallCardCollection
    loading={loading}
    PlaceholderComponent={TallCardPlaceholder}
    scroll={scroll}
  >
    {shows.map(({ externalId, tallImage, name }) => (
      <TallShowCard
        key={externalId}
        externalId={externalId}
        tallImage={tallImage}
        name={name}
      />
    ))}
  </TallCardCollection>
);

export default ShowsCollection;
