import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import TallEpisodeCardPlaceholder from '../../features/episode/components/TallEpisodeCardPlaceholder';

const StyledWrapper = styled('div')`
  --min-width: 200px;
  display: grid;
  grid-gap: 1rem;
  overflow-x: scroll;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 1fr));
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  margin-inline: -${({ theme }) => theme.spacing(0.5)};
  grid-auto-flow: dense;

  &.with-scroll {
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, var(--min-width));
  }

  & > * {
    min-width: var(--min-width);
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
  const placeholders = Array.from(Array(6).keys());

  return (
    <StyledWrapper className={classNames({ 'with-scroll': scroll })}>
      {loading
        ? placeholders.map((idx) => <TallEpisodeCardPlaceholder key={idx} />)
        : children}
    </StyledWrapper>
  );
};

export default TallCardCollection;
