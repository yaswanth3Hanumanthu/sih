import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#messages">Messages</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#jobs">Jobs</a></li>
        </ul>
      </aside>
      
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="profile-summary">
            <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <h2>John Doe</h2>
              <p>Alumni | Software Engineer</p>
              <p>Connections: 150 | Posts: 20</p>
            </div>
          </div>
        </header>
        
        <section className="news-feed">
          <h2>News Feed</h2>
          <div className="post">John Doe shared an article on AI advancements...</div>
          <div className="post">Jane Smith posted about the latest alumni event...</div>
        </section>
        
        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event">Alumni Meetup - 25th Sept 2024</div>
          <div className="event">Webinar on Career Growth - 1st Oct 2024</div>
        </section>
        
        <section className="jobs-section">
          <h2>Job Postings</h2>
          <div className="job">Software Developer at XYZ Corp</div>
          <div className="job">Data Analyst at ABC Ltd</div>
        </section>
        
        <section className="mentorship-requests">
          <h2>Mentorship Requests</h2>
          <div className="request">Jane Smith is looking for a mentor in Data Science...</div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
