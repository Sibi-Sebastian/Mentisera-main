import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
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
  );
};

export default Testimonials;
