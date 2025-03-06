"use client";
import React from 'react';
import {Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { DIRECT_HEAD } from '@/app/components/sections/packages/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CustomButton from '@/app/components/ui/CustomButton';
import { RazorPayLinks } from '@/app/utils/constants';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/sections/Footer';
const DirectConsultation = () => {
  const handleButtonClick = () => {
    window.open(RazorPayLinks.Direct, '_blank');
  };

  return (
    <>
          <Navbar/>
    <section className="consultation-section" style={{ padding: '30px' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>
          {DIRECT_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: 'white', textAlign: 'center' }}>
          One-to-One Personalized Consultation for Any Question, Any Field
        </Typography>

        <Typography variant="body1" paragraph style={{ color: 'white', marginBottom: '30px' }}>
          This is a direct, one-on-one consultation with me (Shweta) where you can ask any question related to any field, and I will provide you with personalized answers and guidance. Whether it's astrology, career advice, love life, or any other concern, you will receive my undivided attention.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            What You’ll Discover:
          </Typography>
          <List>
            <ListItem>
              <FavoriteIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText 
                primary={<strong style={{ color: 'white' }}>Direct Answers to Your Questions:</strong>} 
                secondary="Get personalized, one-on-one answers to any question or issue you're facing."
                sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
              />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText 
                primary={<strong style={{ color: 'white' }}>Guidance on Any Topic:</strong>} 
                secondary="Whether it’s astrology, career, relationships, health, or anything else, you’ll get expert advice."
                sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
              />
            </ListItem>
            <ListItem>
              <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText 
                primary={<strong style={{ color: 'white' }}>In-depth Exploration of Your Concerns:</strong>} 
                secondary="We will dive deep into the details to understand the root cause of any issue."
                sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
              />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText 
                primary={<strong style={{ color: 'white' }}>Personalized Remedies:</strong>} 
                secondary="I’ll provide personalized remedies and actionable advice for any challenges you may be facing."
                sx={{ "& .MuiTypography-body2": { color: "#d3d3d3" } }} 
              />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText 
                primary={<strong style={{ color: 'white' }}>Confidential and Focused Session:</strong>} 
                secondary="Our session will be completely confidential, allowing you to share anything freely."
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
              <ListItemText sx={{ color: 'white' }} primary="Anyone with a burning question or concern" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText sx={{ color: 'white' }} primary="Individuals seeking professional guidance on various matters" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText sx={{ color: 'white' }} primary="Those who prefer a personal, one-on-one consultation" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText sx={{ color: 'white' }} primary="People in need of immediate guidance on a specific issue" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText sx={{ color: 'white' }} primary="Those unsure about their next steps in any area of life" />
            </ListItem>
          </List>
        </div>
       <div style={{ textAlign: 'center' }}>
          <CustomButton 
            onClick={handleButtonClick}
          >
            Book Now 999/-
          </CustomButton>
        </div>
      </Container>
    </section>
    <Footer/>
</>

  );
};

export default DirectConsultation;
