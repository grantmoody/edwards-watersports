import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import ImageSlider from "../components/ImageSlider";

const MoreInfo: React.FC = () => {
    const images = [
        'sparktrixx.png',
        'sparktrixx3.png',
    ];

    return (
        <Container className="moreInfo">
            <Typography variant="h4" mt={3}>
                Our Models
            </Typography>
            <Grid container justifyContent="center" >
                <Grid item>
                    <Typography maxWidth={"500px"} mt={2}>
                        We currently offer two Sea-Doo Spark Trixx 2ups and one Sea-Doo
                        Spark Trixx 3up. These jet skis fit two people at a
                        time and have plenty of playful modes on them.
                    </Typography>
                </Grid>
            </Grid>
            <ImageSlider images={images}></ImageSlider>
            <Typography variant="h4" mt={4}>
                Rental Information
            </Typography>
            <Grid container justifyContent="center" >
                <Grid item>
                    <Typography mt={3} mb={5} maxWidth={"500px"}>
                        We offer our services to Hayden and Coeur d' Alene Lake. Before you are allowed to ride the jetskis, we kindly ask that you review our waiver to fill out in person, and also watch the informational videos provided on our website.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MoreInfo;
