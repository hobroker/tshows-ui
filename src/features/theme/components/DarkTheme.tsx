import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';

interface Props {
  children: ReactNode;
}

const DarkTheme = ({ children }: Props) => (
  <ThemeProvider theme={theme({ mode: 'dark' })}>{children}</ThemeProvider>
);

export default DarkTheme;
