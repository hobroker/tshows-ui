import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import TallEpisodeCardPlaceholder from '../../features/episode/components/TallEpisodeCardPlaceholder';

const StyledWrapper = styled('div')`
  display: grid;
  grid-gap: 1rem;
  overflow-x: scroll;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  & > * {
    min-width: 200px;
  }
`;

interface Props {
  loading: boolean;
  scroll?: boolean;
}

const TallCardCollection = ({
  children,
  loading,
  scroll = false,
}: PropsWithChildren<Props>) => {
  const placeholders = Array.from(Array(12).keys());

  return (
    <StyledWrapper
      sx={{ gridAutoFlow: scroll ? 'column' : 'dense', paddingBottom: 1 }}
    >
      {loading
        ? placeholders.map((idx) => <TallEpisodeCardPlaceholder />)
        : children}
    </StyledWrapper>
  );
};

export default TallCardCollection;
