import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo footer-column">
          <h1>Mentisera</h1>
          <p>Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.</p>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">Facebook</a>
            <a href="#twitter" className="social-icon">Twitter</a>
            <a href="#instagram" className="social-icon">Instagram</a>
            <a href="#linkedin" className="social-icon">LinkedIn</a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Platform</h2>
          <ul>
            <li><a href="#browse-mentors">Browse Mentors</a></li>
            <li><a href="#book-session">Book a Session</a></li>
            <li><a href="#become-mentor">Become a Mentor</a></li>
            <li><a href="#mentorship-teams">Mentorship for Teams</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Resources</h2>
          <ul>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#perks">Perks</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#career-paths">Career Paths</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Company</h2>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#partner-program">Partner Program</a></li>
            <li><a href="#code-conduct">Code of Conduct</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#dmca">DMCA</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Support</h2>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            <li><a href="#groups">Groups</a></li>
            <li><a href="#companies">Companies</a></li>
            <li><a href="#fractional-executives">Fractional Executives</a></li>
            <li><a href="#part-time-experts">Part-Time Experts</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mentisera. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
