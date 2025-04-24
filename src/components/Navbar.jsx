import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-content">
        {/* Far Left: and Name */}
        <div className="navbar-left">
          <span className="brand-name">Mentisera</span>
        </div>

        {/* Middle: Categories + Search + Nav links */}
        <div className="navbar-middle">

          <div className="simple-search-bar">
  <span className="search-icon">🔍</span>
  <input type="text" placeholder="Search..." />
</div>
<span className="nav-item dropdown">Categories</span>


          <ul className="nav-links">
            <li>About</li>
            <li>Events</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="nav-actions">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
