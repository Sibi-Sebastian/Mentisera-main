import React from 'react';
import '../styles/HowItWorks.css';
import '../styles/Testimonials.css';

function Home() {
  const testimonialsData = [
    {
      name: "Farzad",
      role: "Leadership Mentee",
      review: "Naz is an amazing person and a wonderful mentor. She is supportive and knowledgeable with extensive practical experience. Having been a manager at Netflix, she also knows a ton about working with teams at scale. Highly recommended."
    },
    {
      name: "Rao",
      role: "Engineering Mentee",
      review: "Brandon has been supporting me with a software engineering job hunt and has provided amazing value with his industry knowledge, tips unique to my situation and support as I prepared for my interviews and applications."
    },
    {
      name: "Clara",
      role: "Web Development Mentee",
      review: "Sandrina helped me improve as an engineer. Looking back, I took a huge step, beyond my expectations."
    },
    {
      name: "Volha",
      role: "Java Mentee",
      review: "Andrii is the best mentor I have ever met. He explains things clearly and helps to solve almost any problem. He taught me so many things about the world of Java in such a short period of time!"
    },
    {
      name: "Amber",
      role: "Business Mentee",
      review: "Greg is literally helping me achieve my dreams. I had very little idea of what I was doing – Greg was the missing piece that offered me down to earth guidance in business."
    },
    {
      name: "Pierie",
      role: "Desing Mentee",
      review: "Anna really helped me a lot. Her mentoring was very structured, she could answer all my questions and inspired me a lot. I can already see that this has made me even more successful with my agency."
    }
  ];

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

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How Mentisera Works</h2>

        <div className="how-wrapper">
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

      {/* Testimonials Section */}
      <section className="testimonials-container">
        <div className="text-section">
          <h2>Still not convinced? Don't just take our word for it</h2>
          <p>
            We’ve already delivered 1-on-1 mentorship to thousands of students, professionals, managers, and executives.
            Even better, they’ve left an average rating of 4.9 out of 5 for our mentors.
          </p>
          <button className="outline-btn">Find a mentor</button>
        </div>

        <div className="mentee-reviews">
          {testimonialsData.map(({ name, role, review }) => (
            <div key={name} className="review-card">
              <h4>{name} - {role}</h4>
              <p>"{review}"</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
