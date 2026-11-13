import React, { useState, useEffect, useRef } from 'react';
import './Performance.css';

const stats = [
  {
    target: 1800,
    prefix: '',
    suffix: '',
    formattedTarget: '1.800',
    unit: 'potes / hora',
    title: 'Capacidad Productiva',
    description: 'Rendimiento nominal optimizado para satisfacer la demanda de medianas y grandes plantas lácteas.',
    isNumber: true
  },
  {
    target: 8,
    prefix: '',
    suffix: '',
    formattedTarget: '8',
    unit: 'estaciones',
    title: 'Plato Rotativo',
    description: 'Secuencia continua sincronizada mediante indexado de alta precisión y cruz de Malta.',
    isNumber: true
  },
  {
    target: 2,
    prefix: '',
    suffix: ' s',
    formattedTarget: '2 s',
    unit: 'tiempo de ciclo',
    title: 'Velocidad de Respuesta',
    description: 'Dosificación, sellado térmico perimetral y tapado coordinados en 2 segundos por envase.',
    isNumber: true
  },
  {
    target: 0,
    formattedTarget: '1,40 × 1,40 m',
    unit: 'superficie ocupada',
    title: 'Huella Compacta',
    description: 'Menos de 2 m² requeridos en nave de producción, integrando 6 procesos en un único chasis.',
    isNumber: false
  },
  {
    target: 0,
    formattedTarget: '1,90 m',
    unit: 'altura total',
    title: 'Accesibilidad Ergonómica',
    description: 'Facilita la recarga de insumos (láminas y tapas) e inspección visual de la tolva.',
    isNumber: false
  },
  {
    target: 520,
    prefix: '',
    suffix: ' kg',
    formattedTarget: '520 kg',
    unit: 'peso estructural',
    title: 'Robustez Industrial',
    description: 'Estructura rígida en acero inoxidable AISI 304/316L que elimina vibraciones operativas.',
    isNumber: true
  }
];

const Performance = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts([
              Math.floor(easeOut * 1800),
              Math.floor(easeOut * 8),
              parseFloat((easeOut * 2).toFixed(1)),
              0,
              0,
              Math.floor(easeOut * 520)
            ]);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts([1800, 8, 2, 0, 0, 520]);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="rendimiento" className="performance-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">Eficiencia & Métricas</span>
          <h2 className="section-title">Máxima productividad en un espacio reducido.</h2>
          <p className="section-subtitle">
            Diseño centrado en la densidad productiva: mayor volumen de envasado con mínima ocupación de planta y óptimo aprovechamiento energético.
          </p>
        </div>

        {/* Grid de métricas */}
        <div className="kpi-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="kpi-card animate-on-scroll">
              <div className="kpi-value-container">
                <span className="kpi-value">
                  {stat.isNumber
                    ? hasAnimated
                      ? idx === 0
                        ? counts[0].toLocaleString('es-AR')
                        : `${counts[idx]}${stat.suffix}`
                      : '0'
                    : stat.formattedTarget}
                </span>
                <span className="kpi-unit">{stat.unit}</span>
              </div>
              <h3 className="kpi-title">{stat.title}</h3>
              <p className="kpi-description">{stat.description}</p>
              <div className="kpi-accent-bar" />
            </div>
          ))}
        </div>

        {/* Sección de Dimensiones y Diagrama Técnico */}
        <div className="dimensions-panel animate-on-scroll">
          <div className="dimensions-info">
            <span className="dim-badge">Plano Dimensional & Distribución</span>
            <h3 className="dim-title">Geometría compacta con integración total</h3>
            <p className="dim-text">
              AutoLact concentra en una huella de tan solo <strong>1,40 × 1,40 metros</strong> todas las etapas críticas: desapilado, dosificación higiénica, colocación de sello, termosellado, colocación de sobretapa y eyección controlada.
            </p>
            <ul className="dim-specs-list">
              <li>
                <span className="dim-bullet" />
                <strong>Superficie de piso:</strong> 1,96 m² requeridos
              </li>
              <li>
                <span className="dim-bullet" />
                <strong>Altura a tolva dosificadora:</strong> 1.900 mm
              </li>
              <li>
                <span className="dim-bullet" />
                <strong>Diámetro de plato rotativo:</strong> 850 mm con 8 alojamientos modulares
              </li>
              <li>
                <span className="dim-bullet" />
                <strong>Acceso operativo:</strong> 360° para mantenimiento y sanitización
              </li>
            </ul>
            <div className="dim-callout">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Reemplaza líneas lineales de hasta 6 metros de longitud con igual rendimiento.</span>
            </div>
          </div>

          <div className="dimensions-schematic">
            <div className="blueprint-header">
              <span className="blueprint-tag">AUTOLACT-REV.08 // COTAS EN MILÍMETROS</span>
              <span className="blueprint-scale">ESCALA 1:15</span>
            </div>
            
            <div className="schematic-img-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/grafico-1.png`}
                alt="Plano dimensional y distribución AutoLact"
                className="schematic-img"
              />
            </div>

            <div className="blueprint-footer">
              <span className="cad-marker">✓ Acero Inox AISI 304/316L</span>
              <span className="cad-marker">✓ Estructura Autoportante</span>
              <span className="cad-marker">✓ Peso: 520 kg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;

