import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { HEALTH_HEAD } from './constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CustomButton from '../../ui/CustomButton';

const HealthConsultation = () => {
  const handleButtonClick = () => {
    window.open('https://rzp.io/rzp/uAsz2OJZ', '_blank');
  };
  
  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c', textAlign: 'center' }}>
          {HEALTH_HEAD}
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555', marginBottom: '30px' }}>
          This health consultation provides insights into your physical, mental, and emotional well-being. Based on your birth chart, I will analyze your health potentials, areas of concern, and remedies for improving your life quality.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List>
            <ListItem>
              <FavoriteIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Physical Health Insights:</strong>} secondary="Identify the strengths and weaknesses in your physical health based on your astrological chart." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Mental and Emotional Well-being:</strong>} secondary="Understand how planetary placements affect your emotional state and mental health." />
            </ListItem>
            <ListItem>
              <PersonSearchIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Health Conditions You May Be Prone To:</strong>} secondary="Find out potential health challenges based on astrological factors." />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Best Times for Health Changes:</strong>} secondary="Discover the most favorable times for making health-related changes." />
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
              <ListItemText primary="Individuals seeking to boost their health or manage chronic issues" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary="People experiencing emotional or mental imbalances" />
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
              <ListItemText primary={<strong>Health History & Concerns:</strong>} secondary="Provide details on any health issues, both physical and mental." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Your Top 3 Health Questions:</strong>} secondary="Submit specific questions related to your well-being for analysis." />
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
              <ListItemText primary={<strong>Health Chart PDF:</strong>} secondary="A comprehensive PDF detailing your birth chart and health analysis." />
            </ListItem>
            <ListItem>
              <EventAvailableIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>MP3 Audio Recording:</strong>} secondary="A personalized 8-15 minute audio recording answering your health queries." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Delivery Timeline:</strong>} secondary="All materials will be sent via email within 5-7 days." />
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

export default HealthConsultation;
