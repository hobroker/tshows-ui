import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Sx } from '../utils/types';

const StyledBox = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
  display: 'flex',
  justifyContent: 'center',
}));

interface Props {
  sx?: Sx;
  children: ReactNode;
}

const PageWrapper = ({ children, sx }: Props) => (
  <StyledBox sx={sx}>{children}</StyledBox>
);

export default PageWrapper;
