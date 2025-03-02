import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/components/layout/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">EK</span>
          </Link>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/free-konzultace" className="nav-link" onClick={() => setIsMenuOpen(false)}>Free konzultace</Link>
            </li>
            <li className="nav-item">
              <Link to="/o-mne" className="nav-link" onClick={() => setIsMenuOpen(false)}>O mně</Link>
            </li>
            <li className="nav-item">
              <Link to="/koucink" className="nav-link" onClick={() => setIsMenuOpen(false)}>Koučink</Link>
            </li>
            <li className="nav-item">
              <Link to="/produkty" className="nav-link" onClick={() => setIsMenuOpen(false)}>Produkty</Link>
            </li>
            <li className="nav-item">
              <Link to="/kontakt" className="nav-link" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </header>
  );
};

export default Header;