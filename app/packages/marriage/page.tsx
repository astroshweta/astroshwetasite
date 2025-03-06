"use client";
import React from 'react';
import {Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { MARRIAGE_HEAD } from '@/app/components/sections/packages/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CustomButton from '@/app/components/ui/CustomButton';
import { RazorPayLinks } from '@/app/utils/constants';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/sections/Footer';
const MarriageConsultation = () => {
  const handleButtonClick = () => {
    window.open(RazorPayLinks.Marriage, '_blank');
  };

  return (<>
      <Navbar/>
    <section className="consultation-section" style={{ padding: '30px' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>
          {MARRIAGE_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: 'white', textAlign: 'center' }}>
          Unlock Insights into Your Marriage and Relationship Future
        </Typography>

        <Typography variant="body1" paragraph style={{ color: 'white', marginBottom: '30px' }}>
          This consultation offers in-depth analysis of your marriage prospects, relationship compatibility, and much more based on your birth chart. Whether you are seeking to marry, struggling with a current relationship, or looking for guidance on compatibility, this consultation will guide you through it.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: 'yellow' }}>
            What You’ll Discover:
          </Typography>
          <List>
  <ListItem>
    <FavoriteIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Marriage Compatibility:</strong>}
      secondary="Learn whether your kundali aligns well with your partner's, and understand potential challenges."
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
      primary={<strong style={{ color: 'white' }}>Should You Proceed with Marriage?</strong>}
      secondary="Get clarity on whether your relationship is ready for marriage, based on astrological insights."
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
      primary={<strong style={{ color: 'white' }}>Characteristics of Your Future Spouse:</strong>}
      secondary="Find out the traits of your life partner as indicated by the stars."
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
      primary={<strong style={{ color: 'white' }}>Best Time to Marry:</strong>}
      secondary="Receive astrological guidance on when the right time is to marry."
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
</List>

        </div>
        <div style={{ marginBottom: '10px' }}>
      <Typography 
        variant="h6" 
        component="h3" 
        gutterBottom 
        style={{ fontWeight: 'bold', color: 'yellow' }}
      >
        Recommended for:
      </Typography>
      <List sx={{ paddingLeft: '0' }}>
  <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
    <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Individuals looking to get married</strong>} 
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
    <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Those uncertain about their current partner</strong>} 
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
    <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>People separated or divorced looking for a second chance</strong>} 
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
    <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Those confused by multiple love interests</strong>} 
      sx={{
        '& .MuiTypography-body2': {
          color: '#d3d3d3',
        },
      }}
    />
  </ListItem>
  <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
    <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
    <ListItemText 
      primary={<strong style={{ color: 'white' }}>Anyone looking for compatibility readings and relationship advice</strong>} 
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
      primary={<strong style={{ color: 'white' }}>Details of Your Current Relationship:</strong>}
      secondary="Provide details about your current situation, partner's birth details (or potential partner), and questions you have."
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
      primary={<strong style={{ color: 'white' }}>Your Top 3 Relationship Questions:</strong>}
      secondary="Share your specific relationship or marriage-related questions for in-depth answers."
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
      primary={<strong style={{ color: 'white' }}>Basic Kundali Chart PDF:</strong>}
      secondary="A comprehensive PDF detailing your birth chart."
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
      secondary="A personalized 8-15 minute audio recording answering your marriage/relationship queries."
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
            Book Now 599/-
          </CustomButton>
        </div>
      </Container>
    </section>
          <Footer/>
          </>
  );
};

export default MarriageConsultation;
