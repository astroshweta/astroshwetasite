import React from 'react';
import {Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { CAREER_HEAD } from './constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CustomButton from '../../ui/CustomButton';

const CareerConsultation = () => {
  const handleButtonClick = () => {
    window.open('https://rzp.io/rzp/SaoWX6NG', '_blank');
  };

  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c', textAlign: 'center' }}>
          {CAREER_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', textAlign: 'center' }}>
          Unlock Your True Career Potential
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555', marginBottom: '30px' }}>
          This in-depth career consultation will help you explore whether your current profession aligns with your true potential. 
          Together, we’ll uncover the right career paths for your personal growth based on your unique birth chart.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List>
            <ListItem>
              <WorkIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Is Your Current Career Right for You?</strong>} secondary="Determine if your present career field is in harmony with your personal strengths." />
            </ListItem>
            <ListItem>
              <TrendingUpIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Best Career Options for Your Growth:</strong>} secondary="Identify career paths that best align with your astrological chart and growth potential." />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Ideal Time for Career Changes:</strong>} secondary="Learn when the right time is to switch jobs or even change industries." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Should You Pursue a Job or Start a Business?</strong>} secondary="Understand whether a traditional job or entrepreneurial journey is more suitable for you." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Recommended for:
          </Typography>
          <List>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="Individuals uncertain about their current career path" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="Those considering a career change" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="Professionals looking for job changes or opportunities" />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information:
          </Typography>
          <List>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Current Profession & Situation:</strong>} secondary="Provide an overview of your current career, challenges, and goals." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Your Top 3 Career Questions:</strong>} secondary="Share three detailed questions you’d like answered." />
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
              <ListItemText primary={<strong>Your Birth Chart PDF:</strong>} secondary="Detailed PDF containing your charts & planetary placements." />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>MP3 Audio Recording:</strong>} secondary="A personalized audio answering your questions (5-15 minutes)." />
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

export default CareerConsultation;
