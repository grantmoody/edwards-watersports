import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs: React.FC = () => {
    return (
        <Container className="centeredContainer aboutBackground" sx={{maxWidth: 'none !important'}}>
            <Grid container spacing={3} mt={0} mb={15}>
                <Grid item>
                    <img src="edwards_watersports_logo.png" style={{ width: "250px", height: "250px", objectFit: "contain" }} />    
                    <Typography>
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
        </Container>

    )
}

export default AboutUs;