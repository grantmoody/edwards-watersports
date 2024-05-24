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
            <Container sx={{ maxWidth: "none !important", overflow: "hidden" }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between' }}>
                        <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                            <img src="edwards_watersports_logo.png" style={{ width: '250px', paddingTop: '20px', paddingLeft: '10px', verticalAlign: 'middle' }} />
                            {/* <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                className='headerText'
                                sx={{
                                    fontWeight: "bold",
                                    color: 'black',
                                    textDecoration: 'none',
                                    verticalAlign: 'middle', // align the text with the image vertically
                                }}
                            >
                                Edwards Watersports
                            </Typography> */}
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
                                <Link key={page} target={page === 'Rental Booking' ? '_blank' : '_self'} style={{ textDecoration: "none", color: "inherit" }} to={page === 'Rental Booking' ? 'https://www.peek.com/s/3e58fcb7-0751-4fb9-a8d6-b2d6582cb236/l79Dk' : `/${pageToEndpoint[page]}`}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: { md: '5rem', lg: '9rem' } }}>
                        {pages.map((page) => (
                            <Link key={page} target={page === 'Rental Booking' ? '_blank' : '_self'} to={page === 'Rental Booking' ? 'https://www.peek.com/s/3e58fcb7-0751-4fb9-a8d6-b2d6582cb236/l79Dk' : `/${pageToEndpoint[page]}`} style={{ textDecoration: "none", color: "black" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: 'black',
                                        paddingX: 2,
                                        fontSize: 18,
                                        fontWeight: '800',
                                        fontFamily: 'sans-serif',
                                        '&:hover': { borderRadius: 4, background: '#d3d3d3', textDecorationThickness: '0.3em', },
                                        '&:not(:hover)': {
                                            borderRadius: 4,
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
