import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  typography: {
    useNextVariants: true,
  },
});
