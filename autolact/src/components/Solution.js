import React from 'react';
import './Solution.css';

const pillars = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="12" width="16" height="10" rx="1" fill="currentColor" opacity="0.12" />
        <line x1="14" y1="30" x2="22" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="26" x2="18" y2="30" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="14" r="1.5" fill="currentColor" opacity="0.4" />
        <polyline points="12,19 15,16 18,18 22,14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
    title: 'Control inteligente',
    desc: 'PLC Delta TP70P-21EX1T con pantalla táctil de 7 pulgadas. Operación intuitiva, monitoreo en tiempo real y ajuste de parámetros sin herramientas.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 - 90) * (Math.PI / 180);
          const cx = 18 + 13 * Math.cos(angle);
          const cy = 18 + 13 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r="2.5" fill="currentColor" opacity="0.25" />;
        })}
      </svg>
    ),
    title: 'Diseño rotativo',
    desc: '8 estaciones de trabajo en un footprint de solo 1,40 × 1,40 metros. Máxima producción en mínimo espacio, ideal para plantas con superficie limitada.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6v4M18 26v4M6 18h4M26 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 18l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.2" />
        <circle cx="18" cy="30" r="2" fill="currentColor" opacity="0.2" />
        <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.2" />
        <circle cx="30" cy="18" r="2" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    title: 'Mantenimiento simplificado',
    desc: 'Actuadores neumáticos independientes y automatización programable. Sin levas, sin cadenas, sin engranajes complejos: menos desgaste, más uptime.',
  },
];

function Solution() {
  return (
    <section className="solution" id="solucion">
      <div className="solution__container">
        <h2 className="solution__title animate-on-scroll">
          Automatización inteligente. Diseño compacto. Mayor&nbsp;eficiencia.
        </h2>

        <p className="solution__intro animate-on-scroll">
          AutoLact reemplaza los mecanismos mecánicos tradicionales por un sistema
          de control basado en PLC, eliminando la complejidad de levas, cadenas y
          engranajes. El resultado: una máquina más confiable, más fácil de operar
          y con costos de mantenimiento significativamente menores.
        </p>

        <div className="solution__pillars">
          {pillars.map((p, i) => (
            <div className="solution__card animate-on-scroll" key={i}>
              <div className="solution__card-icon">{p.icon}</div>
              <h3 className="solution__card-title">{p.title}</h3>
              <p className="solution__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solution;
