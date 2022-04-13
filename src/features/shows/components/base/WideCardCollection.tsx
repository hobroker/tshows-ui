import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';

interface WrapperProps {
  scroll?: boolean;
  className?: string;
}

const StyledWrapper = styled(({ scroll, ...props }: WrapperProps) => (
  <div {...props} />
))`
  --min-width: 300px;
  display: grid;
  grid-gap: 1rem;
  overflow-x: scroll;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  margin-inline: -${({ theme }) => theme.spacing(0.75)};
  grid-template-columns: ${({ scroll }) =>
    scroll
      ? 'repeat(auto-fit, var(--min-width))'
      : 'repeat(auto-fit, minmax(var(--min-width), 1fr))'};
  grid-auto-flow: ${({ scroll }) => (scroll ? 'column' : 'dense')};

  & > * {
    min-width: var(--min-width);
  }
`;

interface Props extends WrapperProps {
  loading: boolean;
  PlaceholderComponent: React.JSXElementConstructor<any>;
}

const WideCardCollection = ({
  children,
  loading,
  PlaceholderComponent,
  scroll = false,
  className,
}: PropsWithChildren<Props>) => {
  const placeholders = Array.from(Array(6).keys());

  return (
    <StyledWrapper scroll={scroll} className={className}>
      {loading
        ? placeholders.map((idx) => <PlaceholderComponent key={idx} />)
        : children}
    </StyledWrapper>
  );
};

export default WideCardCollection;
