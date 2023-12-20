import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const SocialIcons = () => (
  <Box
    sx={{
      my: 3,
      "& svg": {
        fontSize: "60px",
        cursor: "pointer",
        mr: 2,
      },
      "& svg:hover": {
        color: "goldenrod",
        transform: "translateX(5px)",
        transition: "all 400ms",
      },
    }}
  >
    <InstagramIcon />
    <TwitterIcon />
    <GitHubIcon />
    <YouTubeIcon />
  </Box>
);

const Footer = ({ socialLinks, copyrightText }) => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>
        <SocialIcons />
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          {copyrightText || "All Rights Reserved © Techinfo YT"}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
