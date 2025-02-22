import React from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { EMERGENCY_HEAD } from './constants';

const EmergencyConsultation = () => {

  const listItemStyle = {
    listStyleType: 'disc', 
    paddingLeft: '20px', 
    '&::marker': {
      color: '#ff4500', 
    }
  };

  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
          {EMERGENCY_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          Immediate Consultation for Urgent Matters
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          This emergency consultation offers you the ability to get answers and guidance without waiting for a scheduled time slot. If you're facing a time-sensitive issue or need quick guidance, I am here to assist you in real-time. You’ll receive instant consultation on any topic.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Immediate Answers to Urgent Questions" secondary="Get direct answers and guidance without the wait." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quick Solutions for Time-Sensitive Issues" secondary="Receive prompt solutions to any problem that requires immediate attention." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instant Guidance on Any Matter" secondary="Whether it’s life decisions, career, relationships, or health, get real-time advice." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Personalized Action Plan" secondary="Receive a tailored action plan to resolve your urgent issue, based on your specific needs." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Confidential and Focused Consultation" secondary="Your consultation will be private and dedicated to solving your urgent concerns." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Recommended for:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Individuals facing urgent issues or crises" />
            </ListItem>
            <ListItem>
              <ListItemText primary="People in need of quick decision-making guidance" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Anyone in a time-sensitive situation needing immediate advice" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Those who cannot wait for a scheduled consultation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="People facing life-changing decisions that need to be addressed urgently" />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information for Consultation:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Your Urgent Question or Concern" secondary="Describe your issue or question in detail, highlighting the urgency." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Relevant Context for Immediate Resolution" secondary="Any background information that will help me address your situation quickly." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You Will Receive:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Immediate Consultation" secondary="A live consultation with immediate answers and guidance." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Audio Recording of the Consultation" secondary="Receive an MP3 recording of your consultation for future reference." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Written Summary of Key Insights" secondary="A written summary to help you navigate the insights provided during the consultation." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Emergency Session Delivery" secondary="Receive your session's details within the same day." />
            </ListItem>
          </List>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={() => alert("Book your Emergency Consultation now!")}
            style={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            Book Now 1499/-
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default EmergencyConsultation;
