import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import ChangeCircle from '@mui/icons-material/ChangeCircle';
import i18next from "i18next";
import { useTranslation } from "react-i18next";
export default function App() {
    const { t } = useTranslation();
const lightTheme = makeStyles((theme) => ({
    bg: {
        backgroundColor: "#FFF",
        display: "flex",
        fontFamily: "'Raleway', sans-serif",
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
}))

    const classes = lightTheme();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChangeLanguageEN = () => {
        handleClose();
        i18next.changeLanguage("en", (err) => {
            if (err) {
                return console.log(err);
            };
            localStorage.setItem("language", "en");
        });
    };

    const handleChangeLanguageTR = () => {
        handleClose();
        i18next.changeLanguage("tr", (err) => {
            if (err) {
                return console.log(err);
            };
            localStorage.setItem("language", "tr");
        });
    };
    const handleChangeLanguageDE = () => {
        handleClose();
        i18next.changeLanguage("de", (err) => {
            if (err) {
                return console.log(err);
            };
            localStorage.setItem("language", "de");
        });
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>

            <AppBar position="static">
                <Toolbar className={classes.bg}>
                    <Box>
                        <NavLink className={classes.navLink} to="/">
                            <Button startIcon={<img className={classes.image} src={Logo} draggable={false} alt="avatar" />}>
                             </Button>
                        </NavLink>
                    </Box>
                    <Box>
                    <NavLink className={classes.navLink} to="/partners">
                            <Button>
                                <Typography className={classes.button} variant="p" component="p">{t("navbar.partners")}</Typography>
                            </Button>
                        </NavLink>
                    <NavLink className={classes.navLink} to="/projects">
                            <Button>
                                <Typography className={classes.button} variant="p" component="p">{t("navbar.projects")}</Typography>
                            </Button>
                        </NavLink>
                        </Box>
                    <Box>
                        <IconButton
                            size="large"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <ChangeCircle style={{"color":"#000"}} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleChangeLanguageTR} >Türkçe</MenuItem>
                            <MenuItem onClick={handleChangeLanguageDE} >Deutsch</MenuItem>
                            <MenuItem onClick={handleChangeLanguageEN}>English</MenuItem>
                        </Menu>
                    </Box>

                </Toolbar>
            </AppBar>

        </React.Fragment >
    );

};