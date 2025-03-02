"use client";
import React from 'react';
import {Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { EMERGENCY_HEAD } from '@/app/components/sections/packages/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CustomButton from '@/app/components/ui/CustomButton';
import { RazorPayLinks } from '@/app/utils/constants';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/sections/Footer';
const EmergencyConsultation = () => {
  const handleButtonClick = () => {
    window.open(RazorPayLinks.Emergency, '_blank');
  };

  return (
    <section className="consultation-section" style={{ padding: '30px' }}>
      <Navbar/>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>
          {EMERGENCY_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: 'white', textAlign: 'center' }}>
          Immediate Consultation for Urgent Matters
        </Typography>

        <Typography variant="body1" paragraph style={{ color: 'white', marginBottom: '30px' }}>
          This emergency consultation offers you the ability to get answers and guidance without waiting for a scheduled time slot. If you're facing a time-sensitive issue or need quick guidance, I am here to assist you in real-time. You’ll receive instant consultation on any topic.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            What You’ll Discover:
          </Typography>
          <List>
  <ListItem>
    <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Immediate Answers to Urgent Questions:</strong>}
      secondary="Get direct answers and guidance without the wait."
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
      primary={<strong style={{ color: 'white' }}>Quick Solutions for Time-Sensitive Issues:</strong>}
      secondary="Receive prompt solutions to any problem that requires immediate attention."
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
      primary={<strong style={{ color: 'white' }}>Instant Guidance on Any Matter:</strong>}
      secondary="Whether it’s life decisions, career, relationships, or health, get real-time advice."
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
      primary={<strong style={{ color: 'white' }}>Personalized Action Plan:</strong>}
      secondary="Receive a tailored action plan to resolve your urgent issue, based on your specific needs."
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
      primary={<strong style={{ color: 'white' }}>Confidential and Focused Consultation:</strong>}
      secondary="Your consultation will be private and dedicated to solving your urgent concerns."
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
      primary={<strong style={{ color: 'white' }}>Anyone with a burning question or concern</strong>}
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
      primary={<strong style={{ color: 'white' }}>Individuals seeking professional guidance on various matters</strong>}
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
      primary={<strong style={{ color: 'white' }}>Those who prefer a personal, one-on-one consultation</strong>}
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
      primary={<strong style={{ color: 'white' }}>People in need of immediate guidance on a specific issue</strong>}
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
      primary={<strong style={{ color: 'white' }}>Those unsure about their next steps in any area of life</strong>}
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
            Required Information for Consultation::
          </Typography>
          <List>
  <ListItem>
    <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Your Detailed Question or Concern</strong>}
      secondary="Provide a detailed description of the issue or question you'd like to address."
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
      primary={<strong style={{ color: 'white' }}>Any Relevant Background Information</strong>}
      secondary="Any relevant background information or context to better understand your situation."
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
            Book Now 1499/-
          </CustomButton>
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default EmergencyConsultation;
