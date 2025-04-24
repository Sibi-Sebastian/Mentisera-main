import React from 'react';
import '../styles/Careers.css';

function Careers() {
  const jobOpenings = [
    {
      title: 'Junior Frontend Developer',
      description:
        'We’re looking for a motivated junior developer to join our frontend team. You’ll work closely with designers and senior developers to bring UI designs to life, optimize user experiences, and build scalable features.',
    },
    {
      title: 'Junior Backend Developer',
      description:
        'Join our backend engineering team to help build reliable APIs, databases, and services that power our web applications. Ideal for someone with basic knowledge of Node.js or Python and a strong eagerness to learn.',
    },
    {
      title: 'Student Intern - Digital Marketing',
      description:
        'This internship offers hands-on experience in social media marketing, SEO, and content creation. Perfect for students looking to explore digital marketing and gain industry exposure.',
    },
  ];

  return (
    <div className="careers-page">
      <h1>Careers at Mentisera</h1>
      <p>Explore exciting opportunities to grow with us. Whether you're a student or a fresh graduate, we welcome your enthusiasm and talent!</p>

      <div className="job-listings">
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
