import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    button: {
      fontFamily: 'Public Sans',
    },
    allVariants: {
      fontFamily: ['Public Sans', 'sans-serif'].join(','),
    },
  },
  palette: {
    mode: 'light',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Public Sans', sans-serif;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `,
    },
  },
});

export default lightTheme;
