import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Solución', id: 'solucion' },
    { label: 'Proceso', id: 'proceso' },
    { label: 'Tecnología', id: 'tecnologia' },
    { label: 'Especificaciones', id: 'especificaciones' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#inicio" className="navbar__logo" onClick={(e) => handleNavClick(e, 'inicio')}>
          <img
            src={`${process.env.PUBLIC_URL}/AUTOLACT.png`}
            alt="AutoLact"
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">AutoLact</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__links-cta-mobile">
            <a
              href="#contacto"
              className="navbar__cta"
              onClick={(e) => handleNavClick(e, 'contacto')}
            >
              Solicitar cotización
            </a>
          </li>
        </ul>

        <a
          href="#contacto"
          className="navbar__cta navbar__cta--desktop"
          onClick={(e) => handleNavClick(e, 'contacto')}
        >
          Solicitar cotización
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}

export default Navbar;
