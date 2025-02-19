"use client";
import { Box, Typography } from "@mui/material";
import CustomButton from "../ui/CustomButton";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "url('/hero.jpg') center/cover no-repeat",
        color: "white",
        width: "100%",
      }}
    >
      <Typography variant="h3" fontWeight={700}>Unlock Your Future</Typography>
      <Typography variant="h6" mt={2}>
        Personalized Astrology Sessions for Clarity & Guidance
      </Typography>
      <CustomButton >Book Now</CustomButton>
    </Box>
  );
};

export default Hero;