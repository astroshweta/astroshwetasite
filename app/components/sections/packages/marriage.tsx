import React from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { MARRIAGE_HEAD } from './constants';

const MarriageConsultation = () => {

  // Global list item style
  const listItemStyle = {
    listStyleType: 'disc', // Style of the bullet (can be disc, circle, square, etc.)
    paddingLeft: '20px', // Indentation for the bullets
    '&::marker': {
      color: '#ff1493', // Bullet color (set to a vibrant color to reflect love and relationship)
    }
  };

  return (
    <section className="consultation-section" style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
          {MARRIAGE_HEAD}
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          Unlock Insights into Your Marriage and Relationship Future
        </Typography>

        <Typography variant="body1" paragraph style={{ color: '#555' }}>
          This consultation offers in-depth analysis of your marriage prospects, relationship compatibility, and much more based on your birth chart. Whether you are seeking to marry, struggling with a current relationship, or looking for guidance on compatibility, this consultation will guide you through it.
        </Typography>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You’ll Discover:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Marriage Compatibility:</strong>} secondary="Learn whether your kundali aligns well with your partner's, and understand potential challenges." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Should You Proceed with Marriage?</strong>} secondary="Get clarity on whether your relationship is ready for marriage, based on astrological insights." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Characteristics of Your Future Spouse:</strong>} secondary="Find out the traits of your life partner as indicated by the stars." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Best Time to Marry:</strong>} secondary="Receive astrological guidance on when the right time is to marry." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Areas to Work on for a Happy Marriage:</strong>} secondary="Identify aspects of your relationship that need attention for long-lasting happiness." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Should You Remarry?</strong>} secondary="If you've been divorced, find out if remarriage is possible according to your chart." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Resolve Relationship Doubts:</strong>} secondary="Address concerns about moving forward with your current or potential partner." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Future Love Life Insights:</strong>} secondary="Predict the future of your romantic and marital life, with answers to any specific questions you may have." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Recommended for:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary="Individuals looking to get married" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Those uncertain about their current partner" />
            </ListItem>
            <ListItem>
              <ListItemText primary="People separated or divorced looking for a second chance" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Those confused by multiple love interests" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Anyone looking for compatibility readings and relationship advice" />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            Required Information for Consultation:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Details of Your Current Relationship:</strong>} secondary="Provide details about your current situation, partner's birth details (or potential partner), and questions you have." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Your Top 5 Relationship Questions:</strong>} secondary="Share your specific relationship or marriage-related questions for in-depth answers." />
            </ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <Typography variant="h6" component="h3" gutterBottom style={{ fontWeight: 'bold', color: '#14521c' }}>
            What You Will Receive:
          </Typography>
          <List sx={listItemStyle}>
            <ListItem>
              <ListItemText primary={<strong>Your Birth Chart PDF:</strong>} secondary="Detailed PDF containing your D1, divisional charts, planetary placements, and compatibility analysis." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>MP3 Audio Recording:</strong>} secondary="A personalized audio answering your questions (8-15 minutes)." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Written Summary:</strong>} secondary="Comprehensive written answers, including remedies and suggestions for your marriage." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Timeline for Delivery:</strong>} secondary="You will receive all materials via email in 24-27 days." />
            </ListItem>
          </List>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={() => alert("Start your Marriage Consultation")}
            style={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            Book Now 499/-
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MarriageConsultation;
