// About.js

import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import SImage from "../images/fon-restoran.jpg";

const About = () => {
  return (
    <Layout>
      <main>
        {/* Black Container for Heading */}
        <Box
          className="black-container"
          style={{
            backgroundImage: `url(${SImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" color="white">
            Welcome To Qazaq Food
          </Typography>
        
        </Box>

        <Box
          className="white-container"
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
              color: "black", // Text color for the heading
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h3" color="black">
            We are the team behind "Qazaq Food," proudly presenting the splendid
            world of Kazakh cuisine. Our restaurant is created with love for
            cultural heritage and the flavors of Kazakhstan.
          </Typography>
          {/* Add other paragraphs and content here */}
        </Box>

    
       

      </main>
    </Layout>
  );
};

export default About;
