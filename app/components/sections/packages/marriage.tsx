import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { MARRIAGE_HEAD } from './constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CustomButton from '../../ui/CustomButton';

const MarriageConsultation = () => {
  const handleButtonClick = () => {
    window.open('https://rzp.io/rzp/p1GDFSp8', '_blank');
  };
  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c', textAlign: 'center' }}>
          {MARRIAGE_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', textAlign: 'center' }}>
          Unlock Insights into Your Marriage and Relationship Future
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555', marginBottom: '30px' }}>
          This consultation offers in-depth analysis of your marriage prospects, relationship compatibility, and much more based on your birth chart. Whether you are seeking to marry, struggling with a current relationship, or looking for guidance on compatibility, this consultation will guide you through it.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List>
            <ListItem>
              <FavoriteIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Marriage Compatibility:</strong>} secondary="Learn whether your kundali aligns well with your partner's, and understand potential challenges." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Should You Proceed with Marriage?</strong>} secondary="Get clarity on whether your relationship is ready for marriage, based on astrological insights." />
            </ListItem>
            <ListItem>
              <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Characteristics of Your Future Spouse:</strong>} secondary="Find out the traits of your life partner as indicated by the stars." />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Best Time to Marry:</strong>} secondary="Receive astrological guidance on when the right time is to marry." />
            </ListItem>
          </List>
        </div>
        <div style={{ marginBottom: '10px' }}>
      <Typography 
        variant="h6" 
        component="h3" 
        gutterBottom 
        style={{ fontWeight: 'bold', color: '#14521c' }}
      >
        Recommended for:
      </Typography>
      <List sx={{ paddingLeft: '0' }}>
        <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
          <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
          <ListItemText primary="Individuals looking to get married" />
        </ListItem>
        <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
          <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
          <ListItemText primary="Those uncertain about their current partner" />
        </ListItem>
        <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
          <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
          <ListItemText primary="People separated or divorced looking for a second chance" />
        </ListItem>
        <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
          <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
          <ListItemText primary="Those confused by multiple love interests" />
        </ListItem>
        <ListItem sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
          <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
          <ListItemText primary="Anyone looking for compatibility readings and relationship advice" />
        </ListItem>
      </List>
    </div>
        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information for Consultation:
          </Typography>
          <List>
            <ListItem>
              <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Details of Your Current Relationship:</strong>} secondary="Provide details about your current situation, partner's birth details (or potential partner), and questions you have." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Your Top 3 Relationship Questions:</strong>} secondary="Share your specific relationship or marriage-related questions for in-depth answers." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You Will Receive:
          </Typography>
          <List>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Your Birth Chart PDF:</strong>} secondary="Detailed PDF containing your D1, divisional charts and planetary placements analysis." />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>MP3 Audio Recording:</strong>} secondary="A personalized audio answering your questions (8-15 minutes)." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Timeline for Delivery:</strong>} secondary="You will receive all materials via email in 5-7 days." />
            </ListItem>
          </List>
        </div>

        <div style={{ textAlign: 'center' }}>
          <CustomButton  
             onClick={handleButtonClick}
          >
            Book Now 499/-
          </CustomButton>
        </div>
      </Container>
    </section>
  );
};

export default MarriageConsultation;
