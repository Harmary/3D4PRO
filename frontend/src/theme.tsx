import { createTheme } from '@mui/material/styles';
import './assets/fonts/Montserrat-Bold.ttf';
// import '../public/fonts/Montserrat-SemiBold.ttf';
// import '../public/fonts/OpenSans-SemiBold.ttf';
// import '../public/fonts/OpenSans-Regular.ttf';


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
            weight:700,
            lineHeight: '95 %',
            textAlign: 'center',
            letterSpacing: '0.015em',
            color: '#fffffe',

        },
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontFamily: 'Open Sans',
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "130 %",
            color: "#FFFFFE"
        },
        button: {
            fontFamily: 'Open Sans',
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "155.5 %",
            textTransform: "capitalize",
        },
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