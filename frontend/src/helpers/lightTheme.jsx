import { unstable_createMuiStrictModeTheme, responsiveFontSizes } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    bg: {
        backgroundColor: "#FFF",
        display: "flex",
        justifyContent: "space-between"
    },
    navLink: {
        textDecoration: "none",
    },
    image: {
        width: "34px",
        height: "34px"
    },
    button: {
        color: "#000"
    },
    centered: {
        display: "block",
        margin: "0 auto",
    }
});


export default responsiveFontSizes(unstable_createMuiStrictModeTheme(lightTheme));