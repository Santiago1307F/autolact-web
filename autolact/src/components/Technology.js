import React from 'react';
import './Technology.css';

const features = [
  {
    title: 'Sistema de detección de pote ausente',
    description:
      'Sensor óptico/inductivo verifica presencia del envase. El PLC omite la dosificación automáticamente para evitar derrames y pérdida de producto.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-icon-svg">
        <circle cx="20" cy="16" r="6" stroke="#0D7A8C" strokeWidth="2" />
        <path d="M20 22V32" stroke="#0D7A8C" strokeWidth="2" />
        <path d="M14 28L20 32L26 28" stroke="#0D7A8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10L14 14" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M32 10L26 14" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="20" cy="16" r="2" fill="#0D7A8C" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Control mediante PLC y HMI',
    description:
      'Lógica programable e interfaz táctil intuitiva permiten operar y monitorear todo el proceso desde un único panel de control.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-icon-svg">
        <rect x="6" y="8" width="28" height="20" rx="2" stroke="#0D7A8C" strokeWidth="2" />
        <rect x="10" y="12" width="14" height="8" rx="1" fill="#0D7A8C" opacity="0.15" stroke="#0D7A8C" strokeWidth="1" />
        <circle cx="30" cy="14" r="2" fill="#0D7A8C" opacity="0.6" />
        <circle cx="30" cy="20" r="2" fill="#0D7A8C" opacity="0.3" />
        <line x1="16" y1="28" x2="24" y2="28" stroke="#0D7A8C" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="32" x2="26" y2="32" stroke="#0D7A8C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Construcción sanitaria',
    description:
      'Fabricada íntegramente en acero inoxidable AISI 304 y AISI 316L, apta para ambientes de producción alimentaria con los más altos estándares de higiene.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-icon-svg">
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="#0D7A8C" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 14L27 18V26L20 30L13 26V18L20 14Z" fill="#0D7A8C" opacity="0.1" stroke="#0D7A8C" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 21L19 24L25 18" stroke="#0D7A8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Limpieza y mantenimiento',
    description:
      'Diseño orientado a facilitar la higiene. Compatibilidad CIP según configuración. Acceso rápido a componentes para mantenimiento preventivo.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-icon-svg">
        <path d="M12 30L20 8L28 30" stroke="#0D7A8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22H25" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="34" r="2" fill="#0D7A8C" opacity="0.4" />
        <path d="M8 34H32" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M30 12L34 8" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 14L36 12" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Adaptabilidad de formatos',
    description:
      'Nidos intercambiables permiten trabajar con diferentes diámetros de envase (250 g, 400 g) con cambio rápido y sin herramientas especiales.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-icon-svg">
        <circle cx="15" cy="20" r="8" stroke="#0D7A8C" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="26" cy="20" r="6" stroke="#0D7A8C" strokeWidth="2" />
        <path d="M10 32H30" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M12 35H28" stroke="#0D7A8C" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
        <path d="M20 10V6" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 7H23" stroke="#0D7A8C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function Technology() {
  return (
    <section id="tecnologia" className="technology-section animate-on-scroll">
      <div className="container">
        <div className="tech-header">
          <h2 className="tech-title">
            Cada detalle está pensado para producir mejor.
          </h2>
          <p className="tech-subtitle">
            Tecnología, materiales y diseño al servicio de la productividad y la higiene.
          </p>
        </div>

        <div className="tech-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`tech-card animate-on-scroll ${index === features.length - 1 ? 'tech-card--span' : ''}`}
            >
              <div className="tech-card-border" />
              <div className="tech-card-icon">
                {feature.icon}
              </div>
              <div className="tech-card-content">
                <h3 className="tech-card-title">{feature.title}</h3>
                <p className="tech-card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;
