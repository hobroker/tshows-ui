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
  background-image: linear-gradient(to right, white, white),
    linear-gradient(to right, white, white),
    linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0)),
    linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0));

  background-position: left center, right center, left center, right center;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;

  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;

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
