import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import '../styles/About.css';
import WorkIcon from '@mui/icons-material/Work';

export default function About() {
  return (
    <div className="about-container">
      {/* Left Section (Textual Overview) */}
      <div className="about-left">
        <Typography variant="subtitle1" className="about-subtitle">
          About Me
        </Typography>
        <Typography variant="h3" className="about-heading">
          Professional <span className="highlight">Problem Solutions</span> For Digital Products
        </Typography>
        <Typography variant="body1" className="about-description">
          At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias
          excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum.
        </Typography>
        <div className="about-list">
          <ul>
            <li>✔ Branding & Design</li>
            <li>✔ Web Development</li>
          </ul>
          <ul>
            <li>✔ Digital Marketing</li>
            <li>✔ Product Design</li>
          </ul>
        </div>
        <button className="learn-more-btn">Learn More →</button>
      </div>

      {/* Right Section (Cards & Badge) */}
      <div className="about-right">
        <Paper className="floating-card card1" elevation={3}>
          <Avatar src="/icons/exp-icon.png" className="card-icon" />
          <Typography className="card-text">
            Frontend Development
            <span className="arrow">↗</span>
          </Typography>
        </Paper>

        <Paper className="floating-card card2" elevation={3}>
          <Avatar src="/images/person.png" className="card-avatar" />
          <Typography className="card-text">
            AI / Gen AI Integrations
            <span className="arrow">↗</span>
          </Typography>
        </Paper>

        <Paper className="floating-card card3" elevation={3}>
          <Avatar src="/icons/exp-icon.png" className="card-icon" />
          <Typography className="card-text">
            Backend Development
            <span className="arrow">↗</span>
          </Typography>
        </Paper>

        <div className="experience-badge">
          <Typography variant="h3">3+</Typography>
          <Typography variant="body2">Years Of Experience</Typography>
        </div>
      </div>
    </div>
  );
}
