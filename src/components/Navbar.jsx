import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/" className="brand-name">Mentisera</Link>
        </div>

        <div className="navbar-middle">
          <ul className="nav-list">
            <li className="nav-item">
              <div className="simple-search-bar">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search..." />
              </div>
            </li>
            {/* <li className="nav-item dropdown">Categories</li> */}
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/events" className="nav-link">Events</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/team" className="nav-link">Team</Link></li>
            <li className="nav-item"><Link to="/careers" className="nav-link">Careers</Link></li>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
