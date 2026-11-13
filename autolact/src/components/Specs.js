import React from 'react';
import './Specs.css';

const specsData = [
  { label: 'Tipo de máquina', value: 'Envasadora rotativa automática' },
  { label: 'Estaciones', value: '8' },
  { label: 'Capacidad', value: '1.800 potes/hora' },
  { label: 'Tiempo de ciclo', value: '2 segundos' },
  { label: 'Sistema de accionamiento', value: 'Motorreductor y cruz de Malta' },
  { label: 'Control', value: 'PLC Delta TP70P-21EX1T' },
  { label: 'Interfaz', value: 'Pantalla táctil de 7 pulgadas' },
  { label: 'Alimentación', value: '220 Vca' },
  { label: 'Tensión de control', value: '24 Vcc' },
  { label: 'Presión neumática', value: '6 bar' },
  { label: 'Materiales', value: 'Acero inoxidable AISI 304 / 316L' },
  { label: 'Peso', value: '520 kg' },
  { label: 'Dimensiones', value: '1400 × 1400 × 1900 mm' },
];

function Specs() {
  return (
    <section id="especificaciones" className="specs-section">
      <div className="container">
        <div className="specs-header">
          <h2 className="specs-title">Desarrollada para el entorno industrial.</h2>
          <div className="specs-title-accent"></div>
        </div>
        <div className="specs-table-wrapper animate-on-scroll">
          <table className="specs-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Especificación</th>
              </tr>
            </thead>
            <tbody>
              {specsData.map((spec, index) => (
                <tr key={index}>
                  <td className="spec-label">{spec.label}</td>
                  <td className="spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Specs;
