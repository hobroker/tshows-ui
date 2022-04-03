import React from 'react';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerticalShowCard from '../../shows/components/SmallVerticalShowCard';
import { PartialShow } from '../../../generated/graphql';

const StyledWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;

interface Props {
  shows: PartialShow[];
  loading: boolean;
}

const VerticalShowCardCollection = ({ shows, loading }: Props) => (
  <StyledWrapper>
    {loading ? (
      <CircularProgress />
    ) : (
      shows.map(({ externalId, name, tallImage, status }) => (
        <VerticalShowCard
          key={externalId}
          externalId={externalId}
          name={name}
          tallImage={tallImage}
          status={status}
        />
      ))
    )}
  </StyledWrapper>
);

export default VerticalShowCardCollection;
