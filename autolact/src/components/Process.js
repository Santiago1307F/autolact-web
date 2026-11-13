import React, { useState, useEffect } from 'react';
import './Process.css';

const steps = [
  {
    number: 1,
    title: 'Desapilado del pote',
    description: 'Ventosa neumática toma envase y lo posiciona en el nido.',
  },
  {
    number: 2,
    title: 'Dosificación del producto',
    description: 'Sistema volumétrico mediante sinfín dosifica cantidad configurada.',
  },
  {
    number: 3,
    title: 'Colocación de tapa de aluminio',
    description: 'Brazo neumático posiciona lámina de aluminio sobre envase.',
  },
  {
    number: 4,
    title: 'Sellado térmico',
    description: 'Mordaza calefaccionada realiza sellado perimetral uniforme.',
  },
  {
    number: 5,
    title: 'Colocación de sobretapa',
    description: 'Cubierta plástica de protección.',
  },
  {
    number: 6,
    title: 'Expulsión del producto',
    description: 'Pote terminado retirado automáticamente hacia rampa de salida.',
  },
];

function Process() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 6) + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const cx = 200;
  const cy = 200;
  const plateRadius = 150;
  const stationRadius = 18;
  const totalStations = 8;

  const getStationPos = (index) => {
    const angle = (index * 2 * Math.PI) / totalStations - Math.PI / 2;
    return {
      x: cx + plateRadius * Math.cos(angle),
      y: cy + plateRadius * Math.sin(angle),
    };
  };

  const stationLabels = [
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'
  ];

  return (
    <section id="proceso" className="process-section animate-on-scroll">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title">
            Seis etapas. Un proceso completamente automatizado.
          </h2>
          <p className="process-subtitle">
            Cada estación del plato rotativo cumple una función precisa dentro del ciclo de envasado.
          </p>
        </div>

        <div className="process-content">
          {/* SVG Rotary Plate Diagram */}
          <div className="process-diagram">
            <svg viewBox="0 0 400 400" className="rotary-svg" aria-label="Diagrama de plato rotativo">
              {/* Outer ring */}
              <circle
                cx={cx}
                cy={cy}
                r={plateRadius + 30}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Main plate circle */}
              <circle
                cx={cx}
                cy={cy}
                r={plateRadius}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2"
              />
              {/* Inner circle */}
              <circle
                cx={cx}
                cy={cy}
                r={40}
                fill="#F7F8FA"
                stroke="#E5E7EB"
                strokeWidth="2"
              />
              {/* Center dot */}
              <circle cx={cx} cy={cy} r={6} fill="#0A5C6B" />
              {/* Center label */}
              <text x={cx} y={cy + 25} textAnchor="middle" fontSize="9" fill="#999" fontFamily="Inter, sans-serif">
                PLATO
              </text>
              <text x={cx} y={cy + 35} textAnchor="middle" fontSize="9" fill="#999" fontFamily="Inter, sans-serif">
                ROTATIVO
              </text>

              {/* Connection lines & stations */}
              {Array.from({ length: totalStations }).map((_, i) => {
                const pos = getStationPos(i);
                const isActive = i < 6 && activeStep === i + 1;
                const isProcessStation = i < 6;

                return (
                  <g key={i}>
                    {/* Connection line to center */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isActive ? '#0A5C6B' : '#E5E7EB'}
                      strokeWidth={isActive ? 2 : 1}
                      className="station-line"
                    />
                    {/* Station circle */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? stationRadius + 4 : stationRadius}
                      fill={isActive ? '#0A5C6B' : isProcessStation ? '#F7F8FA' : '#F0F0F0'}
                      stroke={isActive ? '#0A5C6B' : isProcessStation ? '#0A5C6B' : '#CCC'}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      className={`station-circle ${isActive ? 'active' : ''}`}
                      style={{ cursor: isProcessStation ? 'pointer' : 'default' }}
                      onClick={() => isProcessStation && setActiveStep(i + 1)}
                    />
                    {/* Station label */}
                    <text
                      x={pos.x}
                      y={pos.y + 4}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight={isActive ? '700' : '500'}
                      fill={isActive ? '#FFFFFF' : isProcessStation ? '#0A5C6B' : '#999'}
                      fontFamily="Inter, sans-serif"
                      style={{ pointerEvents: 'none' }}
                    >
                      {stationLabels[i]}
                    </text>

                    {/* Active step tooltip */}
                    {isActive && (
                      <g className="station-tooltip">
                        <text
                          x={pos.x}
                          y={pos.y - stationRadius - 10}
                          textAnchor="middle"
                          fontSize="10"
                          fontWeight="600"
                          fill="#0A5C6B"
                          fontFamily="Inter, sans-serif"
                        >
                          {steps[i].title}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Rotation arrow */}
              <path
                d={`M ${cx + 60} ${cy - 15} A 60 60 0 0 1 ${cx + 15} ${cy - 60}`}
                fill="none"
                stroke="#0A5C6B"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
                opacity="0.4"
              />
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#0A5C6B" opacity="0.4" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Steps List */}
          <div className="process-steps">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`process-step-card ${activeStep === step.number ? 'active' : ''}`}
                onClick={() => setActiveStep(step.number)}
                onMouseEnter={() => setActiveStep(step.number)}
              >
                <div className={`step-number ${activeStep === step.number ? 'active' : ''}`}>
                  {step.number}
                </div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
