import React from 'react';
import './Challenge.css';

const problems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3l1.8 2.7 3.2-.9-.3 3.3 3 1.4-2.1 2.5.9 3.2L19.2 14 16 16l-3.2-2-3.3 1.2.9-3.2-2.1-2.5 3-1.4-.3-3.3 3.2.9L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="6" y1="26" x2="26" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M20 22a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="20" x2="22" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: 'Mecanismos complejos',
    desc: 'Los sistemas basados en levas, engranajes y cadenas requieren ajustes constantes y conocimientos mecánicos especializados para su mantenimiento.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="16,8 16,16 22,16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="22" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: 'Paradas prolongadas',
    desc: 'Los tiempos de inactividad por fallas mecánicas o ajustes manuales impactan directamente en la productividad y los costos operativos.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C16 4 6 16 6 21a10 10 0 0020 0C26 16 16 4 16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 22c0-2.2 1.8-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: 'Derrames y desperdicio',
    desc: 'La falta de precisión en dosificación y sellado genera pérdidas de producto, contaminación y merma en cada ciclo de producción.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="16" x2="3" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="29" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="6" x2="16" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="29" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="10" y="10" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'Grandes dimensiones',
    desc: 'Las líneas de envasado convencionales demandan grandes espacios físicos, elevando los costos de infraestructura y limitando la flexibilidad operativa.',
  },
];

function Challenge() {
  return (
    <section className="challenge" id="desafio">
      <div className="challenge__container">
        <h2 className="challenge__title">
          Una nueva forma de entender el envasado&nbsp;industrial.
        </h2>

        <div className="challenge__grid">
          {problems.map((p, i) => (
            <div className="challenge__card animate-on-scroll" key={i}>
              <div className="challenge__icon">{p.icon}</div>
              <h3 className="challenge__card-title">{p.title}</h3>
              <p className="challenge__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="challenge__transition animate-on-scroll">
          AutoLact nace para resolver estos desafíos mediante una solución compacta,
          automatizada y de fácil mantenimiento.
        </p>
      </div>
    </section>
  );
}

export default Challenge;
