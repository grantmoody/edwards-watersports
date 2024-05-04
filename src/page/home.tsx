import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';
import NavBar from "../components/navbar";
import MoreInfo from './moreInfo';
import zIndex from '@mui/material/styles/zIndex';
import AboutUs from './aboutUs';

const HeroSectionContainer = styled('section')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
});

const HeroImg = styled('div')({
    marginTop: '1rem',
    '& img': {
        maxWidth: '100%',
        height: 'auto',
    },
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
    const divRef2 = useRef<HTMLDivElement>(null);
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
        <div className='home'>
            <NavBar />
            <HeroSectionContainer sx={{ backgroundColor: 'rgba(255, 255, 255, 0.0)' }}>
                <Box className="hero-text" sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" mt={"1rem"} mb={"1rem"} color="black">Northern Idaho</Typography>
                    <Typography variant="h6" fontWeight="700" mb={"1rem"} color="black">Locally Owned Business</Typography>
                    <Typography variant="h2" fontWeight="800" color="black">Jetski Rentals</Typography>
                    <Typography variant="body1" mt={"2rem"} mb={"2rem"} color="black">Edwards Watersports is much more than just an amazing Water Sports Equipment Rental Service.</Typography>
                    <Box>
                        <Button style={{
                            color: 'black',
                            border: '1px solid black',
                            marginLeft: "1rem",
                            backgroundColor: 'white',
                            transition: 'transform 0.3s',
                        }} sx={{
                            '&:hover': {
                                transform: 'translateX(.5rem)',
                            },
                        }} variant="contained" href="https://www.peek.com/s/3e58fcb7-0751-4fb9-a8d6-b2d6582cb236/l79Dk">
                            BOOK NOW
                        </Button>
                    </Box>
                </Box>
            </HeroSectionContainer>
            <div ref={divRef}>
                <MoreInfo className={`fade-in ${isVisible ? 'is-visible' : ''}`} />
            </div>
            <div>
                <AboutUs />
            </div>
            <div className='bottomBackground'>
                <Button style={{
                    color: 'black',
                    border: '2px solid black',
                    marginLeft: "1rem",
                    backgroundColor: 'white',
                    fontSize: '24px',
                    transition: 'transform 0.3s',
                }} sx={{
                    '&:hover': {
                        transform: 'translateY(-.5rem)',
                    },
                }} variant="contained" href="https://www.peek.com/s/3e58fcb7-0751-4fb9-a8d6-b2d6582cb236/l79Dk">
                    BOOK NOW
                </Button>
            </div>
            <FooterContainer>
                <a target="_blank" href="https://www.instagram.com/edwardswatersports/?igshid=MzRlODBiNWFlZA%3D%3D">
                    <i className="ri-instagram-line footer-link"></i>
                </a>
            </FooterContainer>

        </div>
    );
};

export default Home;
