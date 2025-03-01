import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { DIRECT_HEAD } from './constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CustomButton from '../../ui/CustomButton';

const DirectConsultation = () => {
  const handleButtonClick = () => {
    window.open('https://rzp.io/rzp/k0bSlLD', '_blank');
  };
  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c', textAlign: 'center' }}>
          {DIRECT_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', textAlign: 'center' }}>
          One-to-One Personalized Consultation for Any Question, Any Field
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555', marginBottom: '30px' }}>
          This is a direct, one-on-one consultation with me (Shweta) where you can ask any question related to any field, and I will provide you with personalized answers and guidance. Whether it's astrology, career advice, love life, or any other concern, you will receive my undivided attention.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List>
            <ListItem>
              <FavoriteIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Direct Answers to Your Questions:</strong>} secondary="Get personalized, one-on-one answers to any question or issue you're facing." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Guidance on Any Topic:</strong>} secondary="Whether it’s astrology, career, relationships, health, or anything else, you’ll get expert advice." />
            </ListItem>
            <ListItem>
              <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>In-depth Exploration of Your Concerns:</strong>} secondary="We will dive deep into the details to understand the root cause of any issue." />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Personalized Remedies:</strong>} secondary="I’ll provide personalized remedies and actionable advice for any challenges you may be facing." />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Confidential and Focused Session:</strong>} secondary="Our session will be completely confidential, allowing you to share anything freely." />
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
              <ListItemText primary="Anyone with a burning question or concern" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="Individuals seeking professional guidance on various matters" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="Those who prefer a personal, one-on-one consultation" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="People in need of immediate guidance on a specific issue" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="Those unsure about their next steps in any area of life" />
            </ListItem>
          </List>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information for Consultation::
          </Typography>
          <List>
            <ListItem>
              <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Your Detailed Question or Concern</strong>} secondary="Provide a detailed description of the issue or question you'd like to address." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Any Relevant Background Information</strong>} secondary="Any relevant background information or context to better understand your situation." />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Your Preferred Time Slot</strong>} secondary="Choose a suitable time slot during the booking process." />
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
  );
};

export default DirectConsultation;
