"use client";
import React from 'react';
import {Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { CAREER_HEAD } from '@/app/components/sections/packages/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CustomButton from '@/app/components/ui/CustomButton';
import { RazorPayLinks } from '@/app/utils/constants';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/sections/Footer';
const CareerConsultation = () => {
  const handleButtonClick = () => {
    window.open(RazorPayLinks.Career, '_blank');
  };

  return (
    <section className="consultation-section" style={{ padding: '30px' }}>
        <Navbar/>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>
          {CAREER_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: 'white', textAlign: 'center' }}>
          Unlock Your True Career Potential
        </Typography>

        <Typography variant="body1" paragraph style={{ color: 'white', marginBottom: '30px' }}>
          This in-depth career consultation will help you explore whether your current profession aligns with your true potential. 
          Together, we’ll uncover the right career paths for your personal growth based on your unique birth chart.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            What You’ll Discover:
          </Typography>
          <List>
  <ListItem>
    <WorkIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Is Your Current Career Right for You?</strong>} 
      secondary="Determine if your present career field is in harmony with your personal strengths." 
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
  <ListItem>
    <TrendingUpIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Best Career Options for Your Growth:</strong>} 
      secondary="Identify career paths that best align with your astrological chart and growth potential." 
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
  <ListItem>
    <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Ideal Time for Career Changes:</strong>} 
      secondary="Learn when the right time is to switch jobs or even change industries." 
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Should You Pursue a Job or Start a Business?</strong>} 
      secondary="Understand whether a traditional job or entrepreneurial journey is more suitable for you." 
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
</List>

        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            Recommended for:
          </Typography>
          <List>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText sx={{ color: 'white' }} primary="Individuals uncertain about their current career path" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText sx={{ color: 'white' }} primary="Those considering a career change" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText sx={{ color: 'white' }} primary="Professionals looking for job changes or opportunities" />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            Required Information:
          </Typography>
          <List>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Current Profession & Situation:</strong>} 
      secondary="Provide an overview of your current career, challenges, and goals."
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Your Top 3 Career Questions:</strong>} 
      secondary="Share three detailed questions you’d like answered."
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
</List>

        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            What You Will Receive:
          </Typography>
          <List>
  <ListItem>
    <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Your Birth Chart PDF:</strong>} 
      secondary="Detailed PDF containing your charts & planetary placements."
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
  <ListItem>
    <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>MP3 Audio Recording:</strong>} 
      secondary="A personalized audio answering your questions (5-15 minutes)."
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Timeline for Delivery:</strong>} 
      secondary="You will receive all materials via email in 5-7 days."
      sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
    />
  </ListItem>
</List>

        </div>

        <div style={{ textAlign: 'center' }}>
          <CustomButton  
            onClick={handleButtonClick}
          >
            Book Now 399/-
          </CustomButton>
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default CareerConsultation;
