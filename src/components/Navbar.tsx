import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
}

function Navbar({ dark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">Portfolio</div>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={handleNavClick}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
