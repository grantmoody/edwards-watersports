import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';
import NavBar from "../components/navbar";
import MoreInfo from './moreInfo';
import AboutUs from './aboutUs';
import { blue } from '@mui/material/colors';

const HeroSectionContainer = styled('section')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
});

const FooterContainer = styled('footer')({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#424242',
    color: '#fff',
    '& a': {
        color: '#fff',
        textDecoration: 'none',
    },
});

const Home: React.FC = () => {

    const divRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const top = divRef.current.getBoundingClientRect().top + 200;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Remove the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='home'>
                <NavBar />
                <HeroSectionContainer sx={{ backgroundColor: 'rgba(255, 255, 255, 0.0)' }}>
                    <Box className="hero-text" sx={{ textAlign: 'left', width: "90%" }}>
                        <Typography variant="h6" mt={"1rem"} mb={"1rem"} color="black">Northern Idaho</Typography>
                        <Typography variant="h6" fontWeight="700" mb={"1rem"} color="black">Locally Owned Business</Typography>
                        <Typography variant="h2" fontWeight="800" color="black" sx={{ fontFamily: 'PermanentMarker, sans-serif !important' }}>Jet Ski Rentals</Typography>
                        <Typography variant="body1" mt={"2rem"} mb={"2rem"} color="black">Edwards Watersports is much more than just an amazing Water Sports Equipment Rental Service.</Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Button style={{
                                color: 'black',
                                border: '1px solid black',
                                marginLeft: "1rem",
                                backgroundColor: 'white',
                                transition: 'transform 0.3s',
                                cursor: 'pointer',
                                overflow: 'hidden'
                            }} sx={{
                                minWidth: {
                                    sm: '200px',
                                    md: '260px',
                                    lg: '360px',
                                    xl: '400px',
                                },
                                minHeight: {
                                    sm: '45px',
                                    md: '50px',
                                    lg: '60px',
                                    xl: '70px',
                                },
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    left:0,
                                    width: "100%",
                                    height:"0%",
                                    background: "#3498db",
                                    transition: '0.8s',
                                    'z-index': -1,
                                    top: 0,
                                    'border-radius': '0 0 50% 50%'
                                },
                                '&:hover::before': {
                                    height: "180%"
                                },
                                '&:hover': {
                                    transform: 'translateX(.5rem)',
                                    color: blue
                                },
                                fontFamily: 'PermanentMarker, sans-serif !important',
                                fontSize: { sm: 14, md: 18, lg: 22 },
                            }} variant="contained" target='_blank' href="https://www.peek.com/s/3e58fcb7-0751-4fb9-a8d6-b2d6582cb236/l79Dk">
                                BOOK NOW
                            </Button>
                        </Box>
                    </Box>
                </HeroSectionContainer>
            </div>
            <section>
                <div className="wave wave1" />
                <div className="wave wave2" />
                <div className="wave wave3" />
                <div className="wave wave4" />
            </section>
            <div ref={divRef}>
                <MoreInfo className={`fade-in ${isVisible ? 'is-visible' : ''}`} />
            </div>

            <div>
                <AboutUs />
            </div>
            <div className='bottomBackground'>
                <Button style={{
                                color: 'black',
                                border: '1px solid black',
                                marginLeft: "1rem",
                                backgroundColor: 'white',
                                transition: 'transform 0.3s',
                                cursor: 'pointer',
                                overflow: 'hidden'
                            }} sx={{
                                mt:"3rem",
                                minWidth: {
                                    sm: '200px',
                                    md: '260px',
                                    lg: '360px',
                                    xl: '400px',
                                },
                                minHeight: {
                                    sm: '45px',
                                    md: '50px',
                                    lg: '60px',
                                    xl: '70px',
                                },
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    left:0,
                                    width: "100%",
                                    height:"0%",
                                    background: "#3498db",
                                    transition: '0.8s',
                                    'z-index': -1,
                                    bottom: 0,
                                    'border-radius': '50% 50% 0 0'
                                },
                                '&:hover::before': {
                                    height: "180%"
                                },
                                '&:hover': {
                                    transform: 'translateX(.5rem)',
                                    color: blue
                                },
                                fontFamily: 'PermanentMarker, sans-serif !important',
                                fontSize: { sm: 14, md: 18, lg: 22 },
                            }} variant="contained" target='_blank' href="https://www.peek.com/s/3e58fcb7-0751-4fb9-a8d6-b2d6582cb236/l79Dk">
                    BOOK NOW
                </Button>
            </div>
        </div>
    );
};

export default Home;
