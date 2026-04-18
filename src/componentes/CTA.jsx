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
  }

  &.cta-box::after {
    content: '⚡';
    position: absolute;
    font-size: 8rem;
    opacity: 0.08;
    bottom: -10px;
    right: 5%;
    transform: rotate(15deg);
  }

  .cta-title {
    font-family: 'Permanent Marker', cursive;
    font-size: clamp(1.8rem, 5vw, 3rem);
    margin-bottom: 10px;
  }

  .cta-sub {
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    margin-bottom: 32px;
    opacity: 0.75;
  }

  .cta-card {
    display: flex;
    flex-direction: column;
    width: 420px;
    min-height: 200px;
    border-radius: 16px;
    background: rgba(255,255,255,0.25);
    backdrop-filter: blur(10px);
    padding: 24px 28px;
    margin: 0 auto;
  }

  .cta-card-title {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.5rem;
  }

  .cta-card-desc {
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    line-height: 1.5;
  }

  .cta-fields {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cta-input-wrap {
    width: 100%;
  }

  .cta-input {
    background: transparent;
    border: 1px solid rgba(5,23,47,0.35);
    border-radius: 10px;
    width: 100%;
    padding: 10px 14px;
    font-family: 'Space Mono', monospace;
  }

  .cta-btn-row {
    margin-top: 4px;
  }

  .btn-cta-primary {
    width:100%;
    background:#05172F;
    color:#70CBC2;
    padding:12px 20px;
    border:none;
    border-radius:10px;
    font-weight:700;
    cursor:pointer;
  }

  .cta-success {
    font-family:'Permanent Marker', cursive;
    margin-top:12px;
  }

  @media (max-width:480px){
    .cta-card{
      width:100%;
    }
  }
`;

export default function CTA({ title }) {

  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(correo && telefono){
      setEnviado(true);
    }
  };

  return (
    <StyledCTA id="cta-section" className="cta-box">

      <h3 className="cta-title">
        {title || 'ÚNETE AL PARCHE'}
      </h3>

      <p className="cta-sub">
        Más de 200 riders ya ruedan con nosotros en Bogotá
      </p>

      <div className="cta-card">

        <div className="cta-card-header">
          <span className="cta-card-title">
            ¡Súmate al parche! 🛹
          </span>

          <p className="cta-card-desc">
            Déjanos tus datos y te avisamos de nuevos drops, eventos y puntos de encuentro.
          </p>
        </div>

        {enviado ? (
          <p className="cta-success">
            ¡Listo, te tenemos en el radar! 🤙
          </p>
        ) : (

          <form className="cta-fields" onSubmit={handleSubmit}>

            <div className="cta-input-wrap">
              <input
                type="email"
                name="email"
                className="cta-input"
                placeholder="Correo electrónico..."
                value={correo}
                onChange={(e)=>setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="cta-input-wrap">
              <input
                type="tel"
                name="phone"
                className="cta-input"
                placeholder="Teléfono (WhatsApp)..."
                value={telefono}
                onChange={(e)=>setTelefono(e.target.value)}
                required
              />
            </div>

            <div className="cta-btn-row">
              <button
                type="submit"
                className="btn-cta-primary"
              >
                ¡Me uno!
              </button>
            </div>

          </form>

        )}

      </div>

    </StyledCTA>
  );
}