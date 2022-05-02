import { blue, grey, yellow, red, lightBlue } from '@mui/material/colors';
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
        '50': lightBlue[50],
      },
      secondary: {
        main: red[500],
      },
      background: {
        default: mode === 'light' ? grey[50] : grey[900],
        paper: mode === 'light' ? grey[50] : grey[900],
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
      MuiRating: {
        styleOverrides: {
          iconFilled: {
            color: yellow[800],
          },
        },
      },
    },
    typography: {
      fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    },
  });

export default theme;
