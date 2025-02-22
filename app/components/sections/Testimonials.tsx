"use client";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Carousel from 'react-slick'; // Add this for carousel functionality
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { testimonials } from "@/app/utils/constants";

const CustomCarousel = styled.div`
  .slick-dots li button:before {
    color: white !important;  /* Change dot color to white */
  }

  .slick-dots li.slick-active button:before {
    color: white !important; /* Active dot color */
  }`;
const stats = [
  { label: "Consultations", value: "2k+" },
  { label: "Lives Transformed", value: "4k+" },
  { label: "Clients from Countries", value: "10+" },

const Testimonials = () => {
  return (
    <>
    <Box id="testimonials" sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h5" fontWeight={700} color="primary">What Clients Say</Typography>
      
      {/* Stats Section */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h4" fontWeight={700} color="primary">{stat.value}</Typography>
                <Typography variant="body1" color="textSecondary">{stat.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
      <Box sx={{ mt: 4,textAlign:"center", margin: '50' }}>
      <CustomCarousel>
      <Carousel
        dots={true}
        autoplay={true}
        autoplaySpeed={5000}
        infinite={true}
        speed={500}
        arrows={true}
      >
          {testimonials.map((review, index) => (
            <Box key={index} sx={{ px: 3 }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.1rem', color: "textSecondary" }}>
                "{review}"
              </Typography>
            </Box>
          ))}
        </Carousel>
        </CustomCarousel>
      </Box>
</>
  );
};

export default Testimonials;
