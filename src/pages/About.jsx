import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Mentisera</h1>
        <p>Your trusted platform for personalized mentorship and skill development.</p>
      </div>
      
      <div className="about-content">
        <section>
          <h2>Our Mission</h2>
          <p>At Mentisera, we strive to provide personalized mentorship that drives practical learning. Our platform connects learners with expert mentors across industries, offering flexible and goal-oriented programs tailored to their unique needs.</p>
          <p>We aim to bridge the gap between knowledge and opportunity, helping individuals grow through mentorship that is both flexible and impactful.</p>
          
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>Expert-led mentorship</li>
            <li>Custom learning paths</li>
            <li>Global community of mentors</li>
          </ul>
        </section>

        <section>
          <h2>Get Started</h2>
          <p>Join us today and take the next step in your learning journey with expert guidance and support.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
