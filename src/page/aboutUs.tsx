import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs: React.FC = () => {
    return (
        <Container className="centeredContainer">
            <Typography variant="h3" mt={5}>
                <strong>About Our Rentals</strong>
            </Typography>
            <Typography variant="h4" mt={2}>
                Who we are
            </Typography>
            <Grid container justifyContent="center" >
                <Grid item>
                    <Typography mt={2}>
                        Welcome to Edwards Watersports!
                        We are a family-owned and operated business
                        that provides thrilling and relaxing jet ski rentals.
                        Our top priority is the safety and satisfaction of
                        our customers, which is why we only use the highest
                        quality jet skis and maintain them to the highest
                        standards. Our team of experienced and friendly
                        staff will ensure that you have a safe and enjoyable
                        experience on the water. Our "do it all" jet
                        skis are here to suit your needs, whether
                        you want to spend a leisurely day on the
                        water exploring the lake or you're looking
                        for a more adventurous ride. We are conveniently
                        located in Coeur d' Alene, Idaho and are open
                        Monday-Sunday from 8AM to 8PM. Come visit us
                        and experience the thrill of jet skiing!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} mt={5} mb={5}>
                <Grid item sm={12} md={8}>
                    <Typography variant="h5">
                        <strong>Ethan Edwards</strong>
                    </Typography>
                    <Typography mt={1}>
                        Hi, I'm Ethan Edwards, the CEO/Founder of
                        Edwards Watersports. When I was 16 years
                        old, I had a simple idea to start renting
                        out jet skis to people on the lake near
                        my home. I had always been passionate
                        about water sports, and I figured there
                        was a demand for jet ski rentals in my
                        area. I started small, with just a few
                        used jet skis and I would rent them
                        out on the weekends and gradually
                        reinvested the profits back into the business.
                        <br />
                        <br />
                        Starting a business at such a young age wasn't easy.
                        I had to learn about the legal and regulatory aspects
                        of entrepreneurship, as well as marketing and customer
                        service. But I was determined to make my vision a reality,
                        and I wasn't afraid to work hard and learn from my mistakes.
                        <br />
                        <br />
                        As word of mouth spread, my business grew quickly.
                        People loved renting our jet skis and experiencing
                        the thrill of riding on the water. I was proud of
                        what I had accomplished, and I knew that I wanted
                        to continue running my business for years to come.
                        Today, I'm still working hard towards my goals and
                        each day I continue to strive to do better than
                        the last. And I encourage other young people to
                        pursue their passions and take risks, even if
                        they seem unconventional. - Ethan Edwards
                    </Typography>
                </Grid>
                <Grid item sm={12} md={4} mt={2}>
                    <img src="newethan.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Grid>
            </Grid>
        </Container>

    )
}

export default AboutUs;