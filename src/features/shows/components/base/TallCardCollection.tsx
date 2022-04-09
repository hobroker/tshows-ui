import React, { PropsWithChildren } from 'react';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

interface Props {
  loading: boolean;
}

const TallCardCollection = ({
  children,
  loading,
}: PropsWithChildren<Props>) => (
  <StyledWrapper>{loading ? <CircularProgress /> : children}</StyledWrapper>
);

export default TallCardCollection;
