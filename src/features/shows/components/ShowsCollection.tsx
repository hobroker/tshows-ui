import React from 'react';
import { Box } from '@mui/material';
import { Show } from '../../../generated/graphql';
import TallCardPlaceholder from '../components/card/TallCardPlaceholder';
import TallCardCollection from '../components/card/TallCardCollection';
import TallShowCard from '../components/TallShowCard';
import IndefiniteLoading from '../../../components/IndefiniteLoading';

interface Props {
  shows: Pick<Show, 'externalId' | 'tallImage' | 'name'>[];
  loading?: boolean;
  loadingIndicator?: boolean;
  scroll: boolean;
}

const ShowsCollection = ({
  shows,
  loading = false,
  loadingIndicator = false,
  scroll,
}: Props) => (
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
    {loadingIndicator && (
      <Box>
        <IndefiniteLoading sx={{ height: '100%', alignItems: 'center' }} />
      </Box>
    )}
  </TallCardCollection>
);

export default ShowsCollection;
