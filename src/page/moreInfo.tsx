import { Container, Typography, Grid } from "@mui/material";
import React from "react";

const MoreInfo: React.FC = () => {

    return (
        <Container className="moreInfo">
            <Typography variant="h2" mt={2}>
                <strong>More Info</strong>
            </Typography>
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
            <Grid container justifyContent="center" spacing={5} mt={1}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Typography variant="subtitle1" align="center" component="div">
                        <strong>Sea-Doo Spark Trixx 2ups</strong>
                    </Typography>
                    <img src="/sparktrixx.png" alt="Sea-Doo Spark Trixx 2ups" className="trixxImage" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Typography variant="subtitle1" align="center" component="div">
                        <strong>Sea-Doo Spark Trixx 3up</strong>
                    </Typography>
                    <img src="/sparktrixx3.png" alt="Sea-Doo Spark Trixx 3up" className="trixxImage" />
                </Grid>
            </Grid>
            <Typography variant="h4" mt={4}>
                Rental Information
            </Typography>
            <Grid container justifyContent="center" >
                <Grid item>
                    <Typography mt={3} maxWidth={"500px"}>
                        We offer our services to Hayden and Coeur d' Alene Lake. Before you are allowed to ride the jetskis, we kindly ask that you review our waiver to fill out in person, and also watch the informational videos provided on our website.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MoreInfo;
