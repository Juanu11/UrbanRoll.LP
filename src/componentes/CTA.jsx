import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCTA = styled.section`
  &.cta-box {
    background: linear-gradient(135deg, #70CBC2 0%, #3da89e 50%, #2a8a82 100%);
    color: #05172F;
    padding: 80px 5%;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  &.cta-box::before {
    content: '🛹';
    position: absolute;
    font-size: 8rem;
    opacity: 0.08;
    top: -10px;
    left: 5%;
    transform: rotate(-20deg);
    pointer-events: none;
  }

  &.cta-box::after {
    content: '⚡';
    position: absolute;
    font-size: 8rem;
    opacity: 0.08;
    bottom: -10px;
    right: 5%;
    transform: rotate(15deg);
    pointer-events: none;
  }

  .cta-title {
    font-family: 'Permanent Marker', cursive;
    font-size: clamp(1.8rem, 5vw, 3rem);
    margin-bottom: 10px;
    color: #05172F;
  }

  .cta-sub {
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    margin-bottom: 32px;
    opacity: 0.75;
  }

  .cta-card {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 420px;
    min-height: 200px;
    border: 1px solid rgba(5, 23, 47, 0.25);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    padding: 24px 28px;
    margin: 0 auto;
    z-index: 1;
  }

  .cta-card::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 80px;
    right: 8px;
    top: -40px;
    background: rgba(5, 23, 47, 0.3);
    border-radius: 50%;
    filter: blur(24px);
    z-index: -1;
  }

  .cta-card::after {
    content: '';
    position: absolute;
    width: 90px;
    height: 90px;
    right: -16px;
    top: -40px;
    background: rgba(5, 23, 47, 0.2);
    border-radius: 50%;
    filter: blur(16px);
    z-index: -1;
  }

  .cta-card-header {
    margin-bottom: 20px;
  }

  .cta-card-title {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.5rem;
    color: #05172F;
    display: block;
    margin-bottom: 6px;
  }

  .cta-card-desc {
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    color: rgba(5, 23, 47, 0.75);
    line-height: 1.5;
  }

  .cta-fields {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cta-input-wrap {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
  }

  .cta-input-wrap::before {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    right: 0;
    background: rgba(5, 23, 47, 0.25);
    border-radius: 50%;
    filter: blur(12px);
    z-index: 0;
  }

  .cta-input-wrap::after {
    content: '';
    position: absolute;
    width: 72px;
    height: 72px;
    right: 12px;
    top: 12px;
    background: rgba(5, 23, 47, 0.15);
    border-radius: 50%;
    filter: blur(12px);
    z-index: 0;
  }

  .cta-input {
    position: relative;
    z-index: 1;
    background: transparent;
    border: 1px solid rgba(5, 23, 47, 0.35);
    color: #05172F;
    font-family: 'Space Mono', monospace;
    font-size: 0.85rem;
    border-radius: 10px;
    width: 100%;
    padding: 10px 14px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .cta-input::placeholder {
    color: rgba(5, 23, 47, 0.55);
  }

  .cta-input:focus {
    border-color: #05172F;
  }

  .cta-btn-row {
    display: flex;
    gap: 10px;
    margin-top: 4px;
  }

  .btn-cta-primary {
    flex: 1;
    background: #05172F;
    color: #70CBC2;
    padding: 12px 20px;
    border: none;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 10px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(5, 23, 47, 0.25);
  }

  .btn-cta-primary:hover {
    transform: translateY(-2px);
    background: #0a2a4a;
    box-shadow: 0 8px 24px rgba(5, 23, 47, 0.35);
  }

  .cta-success {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.3rem;
    color: #05172F;
    margin-top: 12px;
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    .cta-card {
      width: 100%;
    }
  }
`;

export default function CTA({ title }) {
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = () => {
    if (correo && telefono) {
      setEnviado(true);
    }
  };

  return (
    <StyledCTA id="cta-section" className="cta-box">
      <h3 className="cta-title">{title || 'ÚNETE AL PARCHE'}</h3>
      <p className="cta-sub">Más de 200 riders ya ruedan con nosotros en Bogotá</p>

      <div className="cta-card">
        <div className="cta-card-header">
          <span className="cta-card-title">¡Súmate al parche! 🛹</span>
          <p className="cta-card-desc">
            Déjanos tus datos y te avisamos de nuevos drops, eventos y puntos de encuentro.
          </p>
        </div>

        {enviado ? (
          <p className="cta-success">¡Listo, te tenemos en el radar! 🤙</p>
        ) : (
          <div className="cta-fields">
            <div className="cta-input-wrap">
              <input
                type="email"
                className="cta-input"
                placeholder="Correo electrónico..."
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="cta-input-wrap">
              <input
                type="tel"
                className="cta-input"
                placeholder="Teléfono (WhatsApp)..."
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="cta-btn-row">
              <button className="btn-cta-primary" onClick={handleSubmit}>
                ¡Me uno!
              </button>
            </div>
          </div>
        )}
      </div>
    </StyledCTA>
  );
}