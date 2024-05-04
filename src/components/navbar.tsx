import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

const pages = ['Home', 'Rental Booking', 'Contact Us'];

const pageToEndpoint: { [key: string]: string } = {
    "Home": '',
    'Rental Booking': '',
    'Contact Us': ''
}

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between' }}>
                        <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                            <img src="edwards_watersports_logo.png" style={{ width: '50px', verticalAlign: 'middle' }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: "bold",
                                    color: 'black',
                                    textDecoration: 'none',
                                    verticalAlign: 'middle', // align the text with the image vertically
                                }}
                            >
                                Edward's Watersports
                            </Typography>
                        </span>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            style={{ color: 'black' }}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={page} style={{ textDecoration: "none", color: "inherit" }} to={`/${pageToEndpoint[page]}`}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: '4rem' }}>
                        {pages.map((page) => (
                            <Link key={page} to={`/${pageToEndpoint[page]}`} style={{ textDecoration: "none", color: "black" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: 'black',
                                        paddingX: 2,
                                        fontWeight: '600',
                                        fontFamily: 'sans-serif',
                                        '&:hover': { borderRadius: 3, background: '#d3d3d3', textDecorationThickness: '0.1em', },
                                        '&:not(:hover)': {
                                            borderRadius: 3,
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
