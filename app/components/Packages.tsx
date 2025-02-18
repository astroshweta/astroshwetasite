"use client";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const packages = [
  { title: "Chat Consultation", price: "₹ 499", description: "30 minute in depth chat consultation over whatsapp on a provided slot" },
  { title: "Call Consultation", price: "₹ 999", description: "30-minute in-depth Kundali reading on call on  a provided slot" },
  { title: "Call Consultation - Extended", price: "₹ 1499", description: "In-depth Kundali reading without a time limit on a provided slot" },
];

const Packages = () => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ padding: 4 }}>
      {packages.map((pkg) => (
        <Grid item key={pkg.title} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>{pkg.title}</Typography>
              <Typography variant="body1" color="textSecondary" mt={1}>{pkg.description}</Typography>
              <Typography variant="h5" color="primary" mt={2}>{pkg.price}</Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Know More</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Packages;