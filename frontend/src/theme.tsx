import { createTheme } from '@mui/material/styles';
import './assets/fonts/Montserrat-Bold.ttf';
// import '../public/fonts/Montserrat-SemiBold.ttf';
// import '../public/fonts/OpenSans-SemiBold.ttf';
import './assets/fonts/OpenSans-Regular.ttf';


const theme = createTheme({
    palette: {
        primary: {
            main: '#7F5AF0',
            contrastText: '#fffffe'
        },
        secondary: {
            main: '#2CB67D',
        },

    },
    typography: {
        fontFamily: [
            'Montserrat',
            'Open Sans'
        ].join(','),
        h2: {
            fontFamily:"Montserrat",
            fontSize: '72px',
            fontWeight:700,
            lineHeight: '68px',
            letterSpacing: '0.015em',

        },
        h3: {
            fontFamily:"Montserrat",
            fontSize: '64px',
            fontWeight:700,
            lineHeight: '61px',
            letterSpacing: '0.015em',

        },
        subtitle1: {
            fontFamily: "Montserrat",
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: '50px',
            letterSpacing: '0.015em',
        },
        body1: {
            fontFamily: 'Open Sans',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "130 %",
        },
        body2: {
            fontFamily: 'Open Sans',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "130 %",
        },
        button: {
            fontFamily: 'Open Sans',
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "155.5 %",
            textTransform: "capitalize",
        },
        caption: {
            fontFamily: 'Open Sans',
            fontStyle: "normal",
            fontWeight: "regular",
            fontSize: "16px",
            lineHeight: "155.5 %",
            textTransform: "capitalize",
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: bold;
          font-display: swap;
          font-weight: 700;
          src: local('Montserrat'), local('Montserrat-Bold'), url('./assets/fonts/Montserrat-Bold.ttf') format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
});

export default theme;