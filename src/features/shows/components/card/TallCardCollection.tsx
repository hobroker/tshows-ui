import React, { PropsWithChildren } from 'react';
import { styled, css } from '@mui/material/styles';

interface WrapperProps {
  scroll?: boolean;
  className?: string;
}

const StyledWrapper = styled(({ scroll, ...props }: WrapperProps) => (
  <div {...props} />
))`
  --min-width: 150px;
  display: grid;
  grid-gap: 1rem;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  margin-inline: -${({ theme }) => theme.spacing(0.75)};

  ${({ theme, scroll }) =>
    scroll
      ? css`
          overflow-x: scroll;
          grid-template-columns: repeat(auto-fit, var(--min-width));
          grid-auto-flow: column;
        `
      : css`
          grid-template-columns: repeat(2, 1fr);
          grid-auto-flow: dense;

          ${theme.breakpoints.up('sm')} {
            grid-template-columns: repeat(4, 1fr);
          }

          ${theme.breakpoints.up('md')} {
            grid-template-columns: repeat(5, 1fr);
          }

          ${theme.breakpoints.up('lg')} {
            grid-template-columns: repeat(6, 1fr);
          }
        `}

  & > * {
    min-width: var(--min-width);
  }
`;

interface Props extends WrapperProps {
  loading: boolean;
  PlaceholderComponent: React.JSXElementConstructor<any>;
}

const TallCardCollection = ({
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

export default TallCardCollection;
