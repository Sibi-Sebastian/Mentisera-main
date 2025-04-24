import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How it works</h2>

      <div className="how-wrapper">
        {/* Step-by-Step */}
        <div className="how-column">
          <div className="content">
            <h3>Step-by-Step</h3>
            <ol>
              <li>
                <span className="step-number">1</span>
                <div>
                  <strong>Find an Expert</strong>
                  <p>Browse our community of experts to find the right one for you.</p>
                </div>
              </li>
              <li>
                <span className="step-number">2</span>
                <div>
                  <strong>Request a Call</strong>
                  <p>You'll be pre-charged for the estimated call length based on the expert's rate.</p>
                </div>
              </li>
              <li>
                <span className="step-number">3</span>
                <div>
                  <strong>Connect Directly</strong>
                  <p>Join the conference line and get charged only for the actual time spent.</p>
                </div>
              </li>
            </ol>
          </div>
          <button className="outline-btn">Find Experts</button>
        </div>

        {/* Browse Topics */}
        <div className="how-column">
          <div className="content">
            <h3>Browse Topics</h3>
            <input type="text" placeholder="Search topics" className="search-input" />
            <div className="topics-grid">
              {[
                'Entrepreneurship', 'Marketing Strategy', 'Social Media',
                'Startups', 'Life Coaching', 'Business Development',
                'Online Marketing', 'New Business Development'
              ].map(topic => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
          <button className="outline-btn">View All Topics</button>
        </div>

        {/* Get Answers */}
        <div className="how-column">
          <div className="content">
            <h3>Get Answers</h3>
            <div className="question">
              <p className="q">Can you build a used car valuation product from Autotrader (or any other online classifieds) data?</p>
              <p className="meta">3 Answers</p>
            </div>
            <div className="question">
              <p className="q">What are some best practices for managing independent service providers (ex. Lyft drivers) in a two-sided service marketplace? Increasing retention?</p>
              <p className="meta">2 Answers</p>
            </div>
          </div>
          <button className="outline-btn">Ask a Question</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;