import { blue, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import { LinkProps } from '@mui/material/Link/Link.d';
import LinkBehavior from './components/LinkBehaviour';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: yellow[500],
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
  },
  typography: {
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
  },
});

export default theme;
