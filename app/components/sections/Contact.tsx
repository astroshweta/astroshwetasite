"use client";
import { Box, Typography, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box id="contact" sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h5" fontWeight={700}>Contact Me</Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://wa.me/6362668282"
        target="_blank"
        sx={{ mt: 2 }}
      >
        WhatsApp Me
      </Button>
      <Typography mt={2}>or email me at astrologyshweta@gmail.com</Typography>
    </Box>
  );
};

export default Contact;