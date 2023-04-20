import { createTheme } from '@mui/material/styles';
import './assets/fonts/Montserrat-Bold.ttf';
import './assets/fonts/Montserrat-SemiBold.ttf';
import './assets/fonts/OpenSans-SemiBold.ttf';
import './assets/fonts/OpenSans-Regular.ttf';
import themecss from './theme.module.css';


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
            styleOverrides: themecss,
        },
    },
});

export default theme;