import React from 'react';
import '../styles/Events.css'; // Import the newly created styles

function Events() {
  const eventData = [
    {
      title: "Marketing Mastery Workshop",
      description: "Dive deep into cutting-edge marketing strategies that drive results. Learn from top industry experts and elevate your marketing game.",
      date: "June 10, 2025",
      location: "Online - Zoom",
    },
    {
      title: "Startup Networking Event",
      description: "Connect with investors, mentors, and entrepreneurs in a collaborative environment designed to spark new ideas and partnerships.",
      date: "June 15, 2025",
      location: "Tech Hub - New York City",
    },
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <p>Join our exciting upcoming events and enhance your professional network.</p>

      <div className="event-list">
        {eventData.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-details">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
            <button>Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
