import { Box, Typography, Avatar } from "@mui/material";

const About = () => {
  return (
    <Box id="about" sx={{ textAlign: "center", padding: 4 }}>
      <Avatar src="/img1.jpeg" sx={{ width: 100, height: 100, margin: "0 auto" }} />
      <Typography variant="h5" fontWeight={700} mt={2}>About Me</Typography>
      <Typography variant="body1" mt={1}>
        I am Shweta, an experienced astrologer providing personalized readings
        to help you navigate life's uncertainties with confidence.
      </Typography>
    </Box>
  );
};

export default About;