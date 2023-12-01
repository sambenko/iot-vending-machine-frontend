import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0D47A1', // A deep blue color for primary elements
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#42A5F5', // A lighter blue for secondary elements
      contrastText: '#000000',
    },
    background: {
      default: '#121212', // A dark background
      paper: '#1C1C1C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3E5FC', // Light blue for secondary text
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
