import React from 'react';
import './Hero.css';

function Hero() {
  const stats = [
    { value: '1.800', label: 'potes/hora' },
    { value: '8', label: 'estaciones' },
    { value: 'Diseño', label: 'compacto' },
    { value: 'PLC', label: '+ HMI' },
  ];

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid">
        {/* Left — text content */}
        <div className="hero__content">
          <span className="hero__badge">Tecnología para la industria láctea</span>

          <h1 className="hero__title">
            Automatizá tu proceso de&nbsp;envasado.
          </h1>

          <p className="hero__subtitle">
            Precisión, velocidad y tecnología en una envasadora rotativa diseñada
            para optimizar la producción de la industria láctea.
          </p>

          <div className="hero__stats">
            {stats.map((s, i) => (
              <div className="hero__stat" key={i}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__buttons">
            <a href="#solucion" className="hero__btn hero__btn--primary">
              Conocé la máquina
            </a>
            <a href="#contacto" className="hero__btn hero__btn--outline">
              Solicitar cotización
            </a>
          </div>
        </div>

        {/* Right — machine placeholder */}
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <svg className="hero__machine-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer ring */}
              <circle cx="200" cy="200" r="160" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Center hub */}
              <circle cx="200" cy="200" r="32" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <circle cx="200" cy="200" r="10" fill="rgba(255,255,255,0.3)" />

              {/* 8 stations around the circle */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45 - 90) * (Math.PI / 180);
                const cx = 200 + 130 * Math.cos(angle);
                const cy = 200 + 130 * Math.sin(angle);
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <circle cx={cx} cy={cy} r="6" fill="rgba(255,255,255,0.25)" />
                    {/* Spoke line */}
                    <line
                      x1={200 + 32 * Math.cos(angle)}
                      y1={200 + 32 * Math.sin(angle)}
                      x2={200 + 112 * Math.cos(angle)}
                      y2={200 + 112 * Math.sin(angle)}
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1"
                    />
                  </g>
                );
              })}

              {/* Decorative arcs */}
              <path d="M200 40 A160 160 0 0 1 360 200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M200 360 A160 160 0 0 1 40 200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Tick marks */}
              {[...Array(36)].map((_, i) => {
                const angle = (i * 10) * (Math.PI / 180);
                const r1 = 156;
                const r2 = 164;
                return (
                  <line
                    key={`tick-${i}`}
                    x1={200 + r1 * Math.cos(angle)}
                    y1={200 + r1 * Math.sin(angle)}
                    x2={200 + r2 * Math.cos(angle)}
                    y2={200 + r2 * Math.sin(angle)}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Background grid pattern */}
      <div className="hero__bg-pattern" aria-hidden="true" />
    </section>
  );
}

export default Hero;
