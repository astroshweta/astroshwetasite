import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { EMERGENCY_HEAD } from './constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CustomButton from '../../ui/CustomButton';

const EmergencyConsultation = () => {
  const handleButtonClick = () => {
    window.open('https://rzp.io/rzp/KdiQDwNV', '_blank');
  };
  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c', textAlign: 'center' }}>
          {EMERGENCY_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', textAlign: 'center' }}>
          Immediate Consultation for Urgent Matters
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555', marginBottom: '30px' }}>
          This emergency consultation offers you the ability to get answers and guidance without waiting for a scheduled time slot. If you're facing a time-sensitive issue or need quick guidance, I am here to assist you in real-time. You’ll receive instant consultation on any topic.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Immediate Answers to Urgent Questions:</strong>} secondary="Get direct answers and guidance without the wait." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Quick Solutions for Time-Sensitive Issues:</strong>} secondary="Receive prompt solutions to any problem that requires immediate attention." />
            </ListItem>
            <ListItem>
              <HelpOutlineIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Instant Guidance on Any Matter:</strong>} secondary="Whether it’s life decisions, career, relationships, or health, get real-time advice." />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Personalized Action Plan:</strong>} secondary="Receive a tailored action plan to resolve your urgent issue, based on your specific needs." />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: '#ff1493', marginRight: '10px' }} />
              <ListItemText primary={<strong>Confidential and Focused Consultation:</strong>} secondary="Your consultation will be private and dedicated to solving your urgent concerns." />
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
    </section>
  );
};

export default EmergencyConsultation;
