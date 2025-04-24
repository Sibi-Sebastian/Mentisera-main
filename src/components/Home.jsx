import React from 'react';
import HowItWorks from './HowItWorks';

function Home() {
  return (
    <>
      <header className="hero-section">
  <div className="hero-overlay">
    <div className="content">
      <h1 className="title">
        Empowering Lifelong Learning <span className="from">Through</span><br />
        Personalized Mentorship
      </h1>
      <p className="subtitle">
        empower individuals through world-class mentorship,
        helping them develop <br /> skills, solve real-world problems, and become tomorrow's leaders.
      </p>
      <div className="tags">
        <span>Fundraising</span>
        <span>Marketplaces</span>
        <span>Social Media Marketing</span>
        <span>Email Marketing</span>
        <span>Community Building</span>
      </div>
      <div className="buttons">
        <button className="primary">Find Your Expert</button>
        <button className="secondary">Learn More</button>
      </div>
    </div>
  </div>
</header>

      <HowItWorks />
    </>
  );
}

export default Home;
    