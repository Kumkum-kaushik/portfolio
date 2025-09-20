import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        
        {/* Profile Image */}
        <div className="image-wrapper">
          <img 
            src={profile} 
            alt="Kumkum Kaushik" 
            width="200" 
            height="200" 
          />
        </div>

        {/* Content Section */}
        <div className="content">
          
          {/* Social Icons */}
          <div className="social_icons">
            <a 
              href="https://github.com/Kumkum-kaushik" 
              target="_blank" 
              rel="noreferrer"
            >
              <GitHubIcon/>
            </a>
            <a 
              href="https://www.linkedin.com/in/kumkum-kaushik-73a678244" 
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedInIcon/>
            </a>
          </div>

          {/* Name + Title */}
          <h1>Kumkum Kaushik</h1>
          <p>Data Analyst</p>

          {/* Mobile Social Icons */}
          <div className="mobile_social_icons">
            <a 
              href="https://github.com/Kumkum-kaushik" 
              target="_blank" 
              rel="noreferrer"
            >
              <GitHubIcon/>
            </a>
            <a 
              href="https://www.linkedin.com/in/kumkum-kaushik-73a678244" 
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedInIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

