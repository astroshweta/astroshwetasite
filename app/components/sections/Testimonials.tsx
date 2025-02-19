"use client";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const stats = [
  { label: "Consultations", value: "50k+" },
  { label: "Personalized Written Notes", value: "100k+" },
  { label: "Lives Transformed", value: "150k+" },
  { label: "Clients from Countries", value: "20+" },
];

const testimonials = [
  "AstroShweta's guidance changed my life! Highly recommended.",
  "Accurate and insightful readings every time!",
  "The best astrology consultation I've ever had!",
];

const Testimonials = () => {
  return (
    <Box id="testimonials" sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h5" fontWeight={700}>What Clients Say</Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Card>
              <CardContent>
                <Typography variant="h4" fontWeight={700} color="primary">{stat.value}</Typography>
                <Typography variant="body1" color="textSecondary">{stat.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4 }}>
        {testimonials.map((review, index) => (
          <Typography key={index} variant="body1" mt={2}>
            "{review}"
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;