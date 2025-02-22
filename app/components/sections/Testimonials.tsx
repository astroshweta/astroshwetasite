"use client";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Carousel from 'react-slick'; // Add this for carousel functionality
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

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
];

const testimonials = [
  "I liked the consultation that mam provided me over the call. Looking forward to more consultations. She is probably most down to earth Person I have talked to in recent time.",
  "Shweta mam’s reading was so accurate. She helped me understand the challenges I was facing and gave me practical advice to deal with them. Can’t wait to talk to her again!",
  "Mam Aap ki consultation se mujhe apne life goals ke baare mein bohot clarity mili. Bohot hi down to earth hain, aur bohot achi advice di.",
  "I was looking for direction in my career, and Shweta mam gave me exactly that. Her advice was practical and inspiring. Grateful for her insights!",
  "I’ve been consulting astrologers for years, but I’ve never felt such a strong connection with someone. Shweta mam is the real deal. Her guidance was exactly what I needed.",
  "I’m so glad I chose to talk to Shweta mam. Her reading was thorough, insightful, and full of clarity. I felt at peace after the session.",
  "Amazing experience! She took the time to listen to my concerns and provided such valuable insights. I feel much more confident about my future now!",
  "Mujhe lagta tha ke astrology kabhi helpful ho bhi sakti hai kya ? But after talking to Shweta mam, I realized how powerful it can be for life guidance. Highly recommend!. Aur mam ko mai sirf astrologer nhi balki life coach manta hu. Mere breakup k baad maine se consult kiya and she guided me so well. Always Greatful. :) ",
  "Her readings are accurate and relatable. She also explains everything so beautifully that it’s easy to understand and apply in life.",
  "Shweta mam ki consultation ne meri life ko bilkul turn kar diya hai. She helped me see things in a new light, and I feel much more confident now..",
];

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
      {/* Testimonials Carousel Section */}
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
