import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo}>
        BlogApp
      </Link>

      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/blog" className={styles.link}>
          Blog
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className={styles.hamburgerIcon}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </span>
      </button>

      {isMobileMenuOpen && (
        <div 
          className={styles.mobileMenu}
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <Link 
            to="/" 
            className={styles.mobileLink}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={styles.mobileLink}
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={styles.mobileLink}
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
