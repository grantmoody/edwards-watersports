import { Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/navbar";
import MoreInfo from './moreInfo';
import AboutUs from './aboutUs';
import CollapsibleTable from "../components/collapsibleTable";


const FAQ: React.FC = () => {
    return (
        <>
            <NavBar />
            <Typography variant="h3" fontWeight="800" color="black" sx={{ marginTop: "1rem" }}>Frequently Asked Questions</Typography>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <div style={{ maxWidth: '800px', width: '100%' }}>
                    <CollapsibleTable />
                </div>
            </div>
        </>
    )
}

export default FAQ;

//Pets? skiing and tubing? wetsuits? Flotation devices? 