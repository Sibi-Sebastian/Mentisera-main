import React from 'react';
import '../styles/Team.css';

function Team() {
  const teamMembers = [
    {
      name: 'John Doe',
      designation: 'CEO',
      email: 'john.doe@example.com',
      photo: 'https://via.placeholder.com/180',
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      email: 'jane.smith@example.com',
      photo: 'https://via.placeholder.com/180',
    },
    {
      name: 'Emily Johnson',
      designation: 'Lead Developer',
      email: 'emily.johnson@example.com',
      photo: 'https://via.placeholder.com/180',
    },
    {
      name: 'Michael Brown',
      designation: 'Product Manager',
      email: 'michael.brown@example.com',
      photo: 'https://via.placeholder.com/180',
    },
    {
      name: 'Sarah Williams',
      designation: 'Marketing Head',
      email: 'sarah.williams@example.com',
      photo: 'https://via.placeholder.com/180',
    },
  ];

  return (
    <div className="team-page">
      <h1>Meet Our Team</h1>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
