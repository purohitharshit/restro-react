import React from "react";
import {} from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "black",
          color: "white",
          p: 1,
        }}
      >
        <Box sx={{"& svg":{pr:1,pl:1}, "& svg:hover" :{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition: "all 400ms",
            cursor:"pointer"
        }}}>
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </Box>
        <Typography sx={{ p: 1, fontFamily: "sans-serif",  }}>
          All rights reserved &copy; HP Techinfo
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
