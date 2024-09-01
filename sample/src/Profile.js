import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <img src="profile-pic-large.jpg" alt="Profile" className="profile-pic-large" />
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Alumni | Software Engineer</p>
          <p>Location: New York, USA</p>
        </div>
      </header>
      
      <section className="profile-tabs">
        <div className="tab active">Overview</div>
        <div className="tab">Posts</div>
        <div className="tab">Connections</div>
        <div className="tab">Achievements</div>
      </section>
      
      <section className="profile-content">
        <div className="overview">
          <h3>Education</h3>
          <p>B.Sc in Computer Science from XYZ University</p>
          
          <h3>Work Experience</h3>
          <p>Software Engineer at ABC Corp (2019-Present)</p>
          
          <h3>Skills</h3>
          <p>JavaScript, React.js, Node.js, Python</p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
