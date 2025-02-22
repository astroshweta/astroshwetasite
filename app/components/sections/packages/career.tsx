import React from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import {CAREER_HEAD} from './constants';

const CareerConsultation = () => {

  const listItemStyle = {
    listStyleType: 'disc',
    //paddingLeft: '20px', 
    '&::marker': {
      color: '#black', 
    }
  };

  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
          {CAREER_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          Unlock Your True Career Potential
        </Typography>
        
        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          This in-depth career consultation will help you explore whether your current profession aligns with your true potential. Together, we’ll uncover the right career paths for your personal growth based on your unique birth chart. Here’s what you’ll gain from the consultation:
        </Typography>
        
        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Is Your Current Career Right for You?</strong>} secondary="Determine if your present career field is in harmony with your personal strengths." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Best Career Options for Your Growth:</strong>} secondary="Identify career paths that best align with your astrological chart and growth potential." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Ideal Time for Career Changes:</strong>} secondary="Learn when the right time is to switch jobs or even change industries." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Should You Pursue a Job or Start a Business?</strong>} secondary="Understand whether a traditional job or entrepreneurial journey is more suitable for you." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Your Career Purpose:</strong>} secondary="Gain clarity on your purpose, specific to your career, through astrological insights." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Is Entrepreneurship for You?</strong>} secondary="Find out if starting a business aligns with your chart, and if so, which industry suits you best." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Business Expansion Insights:</strong>} secondary="Planning to expand your business? Get detailed guidance on the best times, strategies, and locations for growth." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Personalized Remedies for Career Success:</strong>} secondary="Receive tailored remedies to improve your career prospects, boost your growth, and overcome obstacles." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Additional Career-related Queries:</strong>} secondary="Ask any other specific questions you may have regarding your career trajectory." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Recommended for:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Individuals uncertain about their current career path" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Those considering a career change" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Professionals looking for job changes or opportunities" />
            </ListItem>
            <ListItem>
              <ListItemText primary="People seeking career stability or success" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Entrepreneurs planning to expand or start a business" />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Current Profession & Situation:</strong>} secondary="Please provide a brief overview of your current career, challenges, and goals." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Your Top 3 Career Questions:</strong>} secondary="Share three detailed questions you’d like me to address in-depth." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You Will Receive:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>An MP3 audio file</strong>} secondary="Where I, Shweta, will answer your questions in-depth (8-15 minutes based on the complexity of your questions)." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Written summaries</strong>} secondary="Of my answers for you to revisit at any time." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Personalized remedies</strong>} secondary="For improving your career growth." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>All files</strong>} secondary="Will be sent to your email/whatsapp within 8-10 days." />
            </ListItem>
          </List>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={() => alert("Get Started with Consultation")}
            style={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            Book Now 499/-
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CareerConsultation;
