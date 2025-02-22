import React from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { HEALTH_HEAD } from './constants';

const HealthConsultation = () => {

  // Global list item style
  const listItemStyle = {
    listStyleType: 'disc', // Style of the bullet (can be disc, circle, square, etc.)
    paddingLeft: '20px', // Indentation for the bullets
    '&::marker': {
      color: '#ff6347', // Bullet color (changed to a health-related color)
    }
  };

  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
          {HEALTH_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          Optimize Your Health and Well-being
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          This health consultation provides insights into your physical, mental, and emotional well-being. Based on your birth chart, I will analyze your health potentials, areas of concern, and remedies for improving your life quality. Here's what you can expect:
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Your Physical Health Insights:</strong>} secondary="Identify the strengths and weaknesses in your physical health based on your astrological chart." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Emotional and Mental Well-being:</strong>} secondary="Understand how your emotional state and mental health can be influenced by planetary placements." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Prone to Specific Health Conditions:</strong>} secondary="Find out what health conditions you are more prone to based on astrological factors." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Appropriate Health Remedies:</strong>} secondary="Receive personalized remedies to improve your health and manage any weaknesses or concerns." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Best Times for Health Changes:</strong>} secondary="Learn when it's the best time to make changes in your health routine or undergo treatments." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Astrological Health Chart for Wellness:</strong>} secondary="Receive a detailed health chart showing the strengths and challenges of your physical and mental health." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Diet and Lifestyle Tips:</strong>} secondary="Get insights on the best dietary habits and lifestyle changes based on your astrological profile." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Potential for Stress or Anxiety:</strong>} secondary="Gain insight into stress triggers and how to manage emotional fluctuations through remedies and practices." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Fitness and Exercise Recommendations:</strong>} secondary="Discover the best exercise and fitness routines for your body type and health needs." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Recommended for:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Individuals seeking a health boost or dealing with chronic issues" />
            </ListItem>
            <ListItem>
              <ListItemText primary="People experiencing mental or emotional imbalances" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Those looking for personalized health advice and remedies" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Anyone looking to optimize their health and wellness routines" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Individuals interested in astrology-based health insights" />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information for Consultation:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Your Health History & Concerns:</strong>} secondary="Please provide details on any health issues you are currently facing, both physical and mental." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Your Top 3 Health Questions:</strong>} secondary="Share three specific questions regarding your health or well-being that you'd like me to address." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Your Birth Details:</strong>} secondary="I will need your birth time, date, and place to analyze your health-related astrological chart in-depth." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You Will Receive:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Health Chart PDF</strong>} secondary="Detailed PDF file with your birth chart, analysis of your health-related planetary positions, and more." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>MP3 Audio File of My Insights</strong>} secondary="In-depth audio recording (8-15 mins) of your health-related questions answered by me (Jay)." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Written Summary of Answers</strong>} secondary="Receive a written summary of my answers to refer to whenever you need." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Personalized Health Remedies</strong>} secondary="Tailored recommendations for improving your health based on your unique astrological chart." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Timeline for Delivery</strong>} secondary="You will receive the files in your email within 24-27 days." />
            </ListItem>
          </List>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={() => alert("Get Started with Health Consultation")}
            style={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            Book Now 499/-
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HealthConsultation;
