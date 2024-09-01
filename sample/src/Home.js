import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">AlumniConnect</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#login">Login/Signup</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <h1>Connecting Students and Alumni for a Brighter Future</h1>
        <div className="cta-buttons">
          <button>Join Now</button>
          <button>Explore More</button>
        </div>
      </section>
      
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">Networking</div>
          <div className="feature-card">Mentorship</div>
          <div className="feature-card">Events</div>
          <div className="feature-card">Job Postings</div>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial">"This platform helped me connect with alumni in my field!"</div>
          <div className="testimonial">"The mentorship opportunities are fantastic!"</div>
          <div className="testimonial">"I found my first job through AlumniConnect!"</div>
        </div>
      </section>
      
      <footer>
        <div>© 2024 AlumniConnect. All rights reserved.</div>
        <div>Privacy Policy | Terms of Service</div>
        <div className="social-links">
          <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
