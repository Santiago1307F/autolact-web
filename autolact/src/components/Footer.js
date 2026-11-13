import React from 'react';
import './Footer.css';

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Especificaciones', href: '#especificaciones' },
  { label: 'Contacto', href: '#contacto' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <img
                src={`${process.env.PUBLIC_URL}/AUTOLACT.png`}
                alt="AutoLact"
                className="footer-logo-img"
              />
              <span className="footer-logo-text">AutoLact</span>
            </div>
            <p className="footer-description">
              Diseño y fabricación de maquinaria industrial para envasado automático de productos lácteos.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M1 5L8 9L15 5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <a href="mailto:info@autolact.com.ar">info@autolact.com.ar</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 2H6L7.5 5.5L5.5 7C6.5 9 7 9.5 9 10.5L11 8.5L14.5 10V13C14.5 13.5 14 14 13.5 14C7 14 2 9 2 2.5C2 2 2.5 2 3 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                </svg>
                <span>+54 2272 00-0000</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1C5 1 3 3.5 3 6.5C3 10.5 8 15 8 15C8 15 13 10.5 13 6.5C13 3.5 11 1 8 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>Navarro, Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Proyecto</h4>
            <p className="footer-project">
              Desarrollado por estudiantes de la E.E.S.T. N.º 1 Gral. Manuel Savio, Navarro, Buenos Aires, Argentina.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 AutoLact. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
