import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './CTA.css';

// ============================================================================
// CONFIGURACIÓN DE EMAILJS
// Reemplazá con tus credenciales obtenidas en https://dashboard.emailjs.com/
// También podés definirlas en tu archivo .env (REACT_APP_EMAILJS_...)
// ============================================================================
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_8uwievy',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_m8x4ove',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'TvYlPNY8S7X9HcSg9',
};

function CTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    producto: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Este campo es obligatorio.';
    if (!formData.empresa.trim()) newErrors.empresa = 'Este campo es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'Este campo es obligatorio.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresá un correo electrónico válido.';
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'Este campo es obligatorio.';
    if (!formData.producto) newErrors.producto = 'Seleccioná un producto.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        nombre: formData.nombre.trim(),
        empresa: formData.empresa.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        producto: formData.producto,
        mensaje: formData.mensaje.trim() || 'Sin mensaje adicional',
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Confirmación exitosa: limpiar formulario y mostrar pantalla de éxito
      setSubmitted(true);
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        producto: '',
        mensaje: '',
      });
      setErrors({});
      setSubmitError(null);
    } catch (error) {
      console.error('Error al enviar consulta con EmailJS:', error);
      setSubmitError(
        'Ocurrió un error al enviar tu consulta. Por favor, verificá tu conexión o intentá nuevamente en unos instantes.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section id="contacto" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">¿Estás listo para optimizar tu línea de producción?</h2>
            <p className="cta-subtitle">
              Conocé cómo AutoLact puede ayudarte a mejorar la eficiencia de tu proceso de
              envasado, reducir desperdicios y aprovechar mejor el espacio de tu planta.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" />
                </svg>
                <span>Asesoramiento personalizado</span>
              </div>
              <div className="cta-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" />
                </svg>
                <span>Cotización sin compromiso</span>
              </div>
              <div className="cta-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" />
                </svg>
                <span>Respuesta en 24–48 hs</span>
              </div>
            </div>
          </div>
          <div className="cta-form-wrapper">
            {submitted ? (
              <div className="cta-success">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="26" stroke="#10B981" strokeWidth="3" fill="none" />
                  <path d="M18 28L25 35L38 22" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3>¡Consulta enviada!</h3>
                <p>Gracias por tu interés. Nos pondremos en contacto a la brevedad.</p>
                <button className="cta-reset-btn" onClick={handleReset}>
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form className="cta-form" onSubmit={handleSubmit} noValidate>
                {submitError && (
                  <div className="cta-error-banner" role="alert">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#EF4444" strokeWidth="1.6" />
                      <path d="M10 6V11" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                      <circle cx="10" cy="14" r="1" fill="#EF4444" />
                    </svg>
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="nombre">Nombre y apellido *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez"
                    disabled={isLoading}
                    className={errors.nombre ? 'input-error' : ''}
                  />
                  {errors.nombre && <span className="error-msg">{errors.nombre}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa *</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej: Lácteos del Sur S.A."
                    disabled={isLoading}
                    className={errors.empresa ? 'input-error' : ''}
                  />
                  {errors.empresa && <span className="error-msg">{errors.empresa}</span>}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ej: juan@empresa.com"
                      disabled={isLoading}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono *</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej: +54 11 1234-5678"
                      disabled={isLoading}
                      className={errors.telefono ? 'input-error' : ''}
                    />
                    {errors.telefono && <span className="error-msg">{errors.telefono}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="producto">Producto que desea envasar *</label>
                  <select
                    id="producto"
                    name="producto"
                    value={formData.producto}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={errors.producto ? 'input-error' : ''}
                  >
                    <option value="">Seleccionar producto...</option>
                    <option value="Dulce de leche">Dulce de leche</option>
                    <option value="Queso untable">Queso untable</option>
                    <option value="Yogur">Yogur</option>
                    <option value="Postres lácteos">Postres lácteos</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.producto && <span className="error-msg">{errors.producto}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje o consulta</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos sobre tu proyecto o necesidad..."
                    rows="4"
                    disabled={isLoading}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="cta-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="btn-loading-content">
                      <span className="btn-spinner" />
                      Enviando consulta...
                    </span>
                  ) : (
                    'Enviar consulta'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
