import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';

const StyledWrapper = styled('div')`
  --min-width: 200px;
  display: grid;
  grid-gap: 1rem;
  overflow-x: scroll;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 1fr));
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  margin-inline: -${({ theme }) => theme.spacing(0.75)};
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
  PlaceholderComponent: React.JSXElementConstructor<any>;
  scroll?: boolean;
}

const TallCardCollection = ({
  children,
  loading,
  PlaceholderComponent,
  scroll = false,
}: PropsWithChildren<Props>) => {
  const placeholders = Array.from(Array(6).keys());

  return (
    <StyledWrapper className={classNames({ 'with-scroll': scroll })}>
      {loading
        ? placeholders.map((idx) => <PlaceholderComponent key={idx} />)
        : children}
    </StyledWrapper>
  );
};

export default TallCardCollection;
