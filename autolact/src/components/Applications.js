import React from 'react';
import './Applications.css';

const JarIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="20" y="12" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M24 34C24 34 28 30 32 34C36 38 40 34 40 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="44" x2="48" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

const CheeseIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 44L32 16L56 44H8Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <rect x="8" y="44" width="48" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="28" cy="38" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="38" cy="42" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="22" cy="44" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const YogurtIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 20H46L42 56H22L18 20Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <rect x="14" y="14" width="36" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <ellipse cx="32" cy="36" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="32" y1="8" x2="32" y2="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="4" r="2" fill="currentColor" />
  </svg>
);

const DessertIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 36H52L48 56H16L12 36Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <path d="M12 36C12 36 16 24 32 24C48 24 52 36 52 36" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="24" cy="30" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="36" cy="28" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="32" cy="32" r="1.5" fill="currentColor" opacity="0.5" />
    <path d="M28 20C28 16 32 12 32 12C32 12 36 16 36 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const applications = [
  { name: 'Dulce de leche', Icon: JarIcon },
  { name: 'Queso untable', Icon: CheeseIcon },
  { name: 'Yogur', Icon: YogurtIcon },
  { name: 'Postres lácteos', Icon: DessertIcon },
];

function Applications() {
  return (
    <section id="aplicaciones" className="applications-section">
      <div className="container">
        <div className="applications-header">
          <h2 className="applications-title">Una solución versátil para la industria láctea.</h2>
          <div className="applications-title-accent"></div>
        </div>
        <div className="applications-grid">
          {applications.map((app, index) => (
            <div className="application-card animate-on-scroll" key={index}>
              <div className="application-icon">
                <app.Icon />
              </div>
              <h3 className="application-name">{app.name}</h3>
            </div>
          ))}
        </div>
        <p className="applications-disclaimer">
          Las condiciones de dosificación y configuración deben evaluarse según las características de cada producto.
        </p>
      </div>
    </section>
  );
}

export default Applications;
