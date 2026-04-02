import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .glass-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0;
    margin-top: 40px;
    padding: 20px 0 40px;
  }

  .glass {
    position: relative;
    width: 200px;
    height: 240px;
    background: linear-gradient(rgba(112,203,194,0.15), transparent);
    border: 1px solid rgba(112, 203, 194, 0.25);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease;
    border-radius: 16px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    cursor: default;
    gap: 12px;
    padding: 20px;
    text-align: center;
  }

  .glass:nth-child(1) { transform: rotate(-15deg); z-index: 1; }
  .glass:nth-child(2) { transform: rotate(5deg); z-index: 2; }
  .glass:nth-child(3) { transform: rotate(25deg); z-index: 1; }

  .glass-container:hover .glass {
    transform: rotate(0deg) !important;
    margin: 0 12px;
    z-index: 1;
  }

  .glass-container:hover .glass:nth-child(2) {
    z-index: 2;
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 44px;
    background: rgba(112, 203, 194, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #70CBC2;
    font-family: 'Permanent Marker', cursive;
    font-size: 1rem;
    border-radius: 0 0 16px 16px;
    letter-spacing: 1px;
  }

  .glass svg {
    width: 48px;
    height: 48px;
    fill: #70CBC2;
    margin-bottom: 8px;
  }

  .glass .step-num {
    font-family: 'Permanent Marker', cursive;
    font-size: 2rem;
    color: rgba(112, 203, 194, 0.3);
    position: absolute;
    top: 12px;
    right: 16px;
  }

  .glass .step-desc {
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    color: rgba(240, 244, 248, 0.7);
    line-height: 1.5;
    padding: 0 8px;
    margin-bottom: 36px;
  }
`;

export default function Explicacion() {
  return (
    <section id="explicacion">
      <h2 className="section-title">¿CÓMO FUNCIONA EL PARCHE?</h2>
      <StyledWrapper>
        <div className="glass-container">
          {/* Step 1 */}
          <div className="glass" data-text="ELIGE TU NAVE">
            <span className="step-num">1</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 0 0-2 0v1H7V3a1 1 0 0 0-1-1zM4 8h16v10H4V8zm2 2v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H6zm4 0v2h2v-2h-2z"/>
            </svg>
            <p className="step-desc">Selecciona el skate o scooter que más se acomode a tu estilo en Bogotá.</p>
          </div>

          {/* Step 2 */}
          <div className="glass" data-text="ALISTAMIENTO PRO">
            <span className="step-num">2</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.78 4a1 1 0 0 0-.7.3l-9 9a1 1 0 0 0 0 1.4l5.22 5.22a1 1 0 0 0 1.4 0l9-9a1 1 0 0 0 .3-.71V5a1 1 0 0 0-1-1h-5.22zM14.2 6H18v3.8l-8.5 8.5-3.8-3.8L14.2 6zM16 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
            <p className="step-desc">Configuramos y probamos cada rodamiento y motor antes de que salga de bodega.</p>
          </div>

          {/* Step 3 */}
          <div className="glass" data-text="A RODAR">
            <span className="step-num">3</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 10c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/>
            </svg>
            <p className="step-desc">Recibes tu equipo y te enviamos la invitación al próximo punto de encuentro.</p>
          </div>
        </div>
      </StyledWrapper>
    </section>
  );
}