import { useState, useContext, useCallback } from 'react';
import {
    Drawer,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Button,
    ListItemText,
    Hidden,
    Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from "react-router-dom";
import {FormattedMessage} from "react-intl";

import { AppContext } from '../../providers/appContext';
import { LOCALES } from '../../const';
import translate from '../../utils/translate';

const Navigation = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const { state, dispatch } = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, []);

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation">
            <List>
                <Link to='settings'>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={translate('navigation.settings')} />
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Hidden only={['lg', 'xl']}>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ color: "white", flexGrow: 1 }}>
                            <FormattedMessage id="navigation.home" />
                        </Typography>
                    </Link>
                    <Box>
                        <Button disabled={state.locale === LOCALES.ENGLISH}
                            sx={{ my: 2, color: 'white' }}
                            onClick={() => setLanguage(LOCALES.ENGLISH)}>
                            ENGLISH
                        </Button>

                        <Button disabled={state.locale === LOCALES.UKRANIAN}
                            sx={{ my: 2, color: 'white'}}
                            onClick={() => setLanguage(LOCALES.UKRANIAN)}>
                            Українська
                        </Button>
                    </Box>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        <Button component={RouterLink}
                            to='settings'
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <FormattedMessage id="navigation.settings" />
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
}

export default Navigation;
