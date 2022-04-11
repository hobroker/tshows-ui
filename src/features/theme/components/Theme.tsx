import React, { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';

interface Props {
  children: ReactNode;
}

const Theme = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={theme({ mode: isDarkMode ? 'dark' : 'light' })}>
      <CssBaseline />
      {children}
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        style={{ position: 'absolute' }}
      />
    </ThemeProvider>
  );
};

export default Theme;
