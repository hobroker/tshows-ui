import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { LinkProps } from '@mui/material/Link/Link.d';
import LinkBehavior from './components/LinkBehaviour';

interface Props {
  mode?: PaletteMode;
}

const theme = ({ mode = 'light' }: Props = {}) =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: blue[500],
      },
      secondary: {
        main: red[500],
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiChip: {
        styleOverrides: {
          filled: {
            border: '1px solid transparent',
          },
        },
      },
    },
    typography: {
      fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    },
  });

export default theme;
