import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs: React.FC = () => {
    return (
        <Container className="centeredContainer aboutBackground">
            <Typography variant="h4" mt={8}>
                Who we are
            </Typography>
            <Grid container spacing={3} mt={1} mb={5}>
                <Grid item sm={12} md={8}>
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
                <Grid item sm={12} md={4} mt={2}>
                    <img src="newethan.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Grid>
            </Grid>
        </Container>

    )
}

export default AboutUs;