"use client";
import React from 'react';
import {Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { HEALTH_HEAD } from '@/app/components/sections/packages/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CustomButton from '@/app/components/ui/CustomButton';
import { RazorPayLinks } from '@/app/utils/constants';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/sections/Footer';
const HealthConsultation = () => {
  const handleButtonClick = () => {
    window.open(RazorPayLinks.Health, '_blank');
  };

  return (
    <section className="consultation-section" style={{ padding: '30px' }}>
      <Navbar/>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>
          {HEALTH_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: 'white', marginBottom: '30px' }}>
          This health consultation provides insights into your physical, mental, and emotional well-being. Based on your birth chart, I will analyze your health potentials, areas of concern, and remedies for improving your life quality.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            What You’ll Discover:
          </Typography>
          <List>
  <ListItem>
    <FavoriteIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Physical Health Insights:</strong>}
      secondary="Identify the strengths and weaknesses in your physical health based on your astrological chart."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Mental and Emotional Well-being:</strong>}
      secondary="Understand how planetary placements affect your emotional state and mental health."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem>
    <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Health Conditions You May Be Prone To:</strong>}
      secondary="Find out potential health challenges based on astrological factors."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem>
    <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Best Times for Health Changes:</strong>}
      secondary="Discover the most favorable times for making health-related changes."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
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
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Individuals seeking to boost their health or manage chronic issues</strong>}
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem>
    <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>People experiencing emotional or mental imbalances</strong>}
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
</List>

        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            Required Information for Consultation:
          </Typography>
          <List>
  <ListItem>
    <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Health History & Concerns:</strong>}
      secondary="Provide details on any health issues, both physical and mental."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Your Top 3 Health Questions:</strong>}
      secondary="Submit specific questions related to your well-being for analysis."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
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
      primary={<strong style={{ color: 'white' }}>Health Chart PDF:</strong>}
      secondary="A comprehensive PDF detailing your birth chart and health analysis."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem>
    <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>MP3 Audio Recording:</strong>}
      secondary="A personalized 8-15 minute audio recording answering your health queries."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Delivery Timeline:</strong>}
      secondary="All materials will be sent via email within 5-7 days."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
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

export default HealthConsultation;
