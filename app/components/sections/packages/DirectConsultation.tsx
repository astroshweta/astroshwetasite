import React from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { DIRECT_HEAD } from './constants';

const DirectConsultation = () => {

  // Global list item style
  const listItemStyle = {
    listStyleType: 'disc', // Style of the bullet (can be disc, circle, square, etc.)
    paddingLeft: '20px', // Indentation for the bullets
    '&::marker': {
      color: '#1e90ff', // Bullet color set to blue for a calming, professional feel
    }
  };

  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
          {DIRECT_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          One-to-One Personalized Consultation for Any Question, Any Field
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          This is a direct, one-on-one consultation with me (Jay) where you can ask any question related to any field, and I will provide you with personalized answers and guidance. Whether it's astrology, career advice, love life, or any other concern, you will receive my undivided attention.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Direct Answers to Your Questions" secondary="Get personalized, one-on-one answers to any question or issue you're facing." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Guidance on Any Topic" secondary="Whether it’s astrology, career, relationships, health, or anything else, you’ll get expert advice." />
            </ListItem>
            <ListItem>
              <ListItemText primary="In-depth Exploration of Your Concerns" secondary="We will dive deep into the details to understand the root cause of any issue." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Personalized Remedies" secondary="I’ll provide personalized remedies and actionable advice for any challenges you may be facing." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Confidential and Focused Session" secondary="Our session will be completely confidential, allowing you to share anything freely." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Recommended for:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Anyone with a burning question or concern" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Individuals seeking professional guidance on various matters" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Those who prefer a personal, one-on-one consultation" />
            </ListItem>
            <ListItem>
              <ListItemText primary="People in need of immediate guidance on a specific issue" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Those unsure about their next steps in any area of life" />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information for Consultation:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Your Detailed Question or Concern" secondary="Provide a detailed description of the issue or question you'd like to address." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Any Relevant Background Information" secondary="Any relevant background information or context to better understand your situation." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Your Preferred Time Slot" secondary="Choose a suitable time slot during the booking process." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You Will Receive:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Direct One-on-One Consultation" secondary="A live, personalized consultation where I will address your questions." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Audio Recording of the Session" secondary="Receive an MP3 recording of your consultation to refer back to at any time." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Written Summary of Key Insights" secondary="A written summary of the session’s key takeaways and guidance." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Flexible Time Slot Selection" secondary="Choose your preferred time slot for the consultation during the booking process." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Session Delivery" secondary="You’ll get the consultation recording and summary within 24-48 hours." />
            </ListItem>
          </List>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={() => alert("Book your Direct Consultation now!")}
            style={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            Book Now 999/-
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default DirectConsultation;
