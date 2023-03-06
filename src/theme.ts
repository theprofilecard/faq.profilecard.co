import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#13111a',
      paper: '#13111a',
    },
    text: {
      primary: '#C0C2CE',
    },
    primary: {
      light: '#7353E5',
      main: '#CE4DA4',
      contrastText: '#fff',
    },
    secondary: {
      light: '#CE4DA4',
      main: '#7353E5',
      contrastText: '#000',
    },
  },
});

export default theme;
