import React, { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';

interface Props {
  children: ReactNode;
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
