import { FormControl, styled } from '@mui/material';
import theme from '../theme';


export const WhiteTextField = styled(FormControl)({
    '& .MuiOutlinedInput-input': {
        color: theme.palette.primary.contrastText,
    },
    '& label.Mui-focused': {
        color: '#72757E',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#72757E',
        },
        '&:hover fieldset': {
            border: "#72757E solid 2px",
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
});