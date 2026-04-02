import React from 'react';
import styled from 'styled-components';

const questions = [
  { q: "¿Hacen envíos a todo Bogotá?", a: "¡Claro! Entregamos el mismo día si pides antes de las 2 PM." },
  { q: "¿Tienen garantía?", a: "Todas nuestras tablas y scooters tienen 6 meses de garantía por defectos de fábrica." },
  { q: "¿Dónde son los encuentros?", a: "Rodamos todos los jueves en el Park Way y los domingos en la ciclovía." },
];

const StyledWrapper = styled.div`
  .faq-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
  }

  .flip-card {
    background-color: transparent;
    width: 260px;
    height: 200px;
    perspective: 1000px;
    cursor: pointer;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 16px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .flip-card-front {
    background: linear-gradient(135deg, #0a2a4a 0%, #05172F 100%);
    border: 1px solid rgba(112, 203, 194, 0.4);
    color: #70CBC2;
    font-family: 'Permanent Marker', cursive;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .flip-card-front .icon {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .flip-card-back {
    background: linear-gradient(135deg, #70CBC2 0%, #3da89e 100%);
    border: 1px solid rgba(112, 203, 194, 0.6);
    color: #05172F;
    transform: rotateY(180deg);
    font-family: 'Space Mono', monospace;
    font-size: 0.88rem;
    font-weight: 700;
    line-height: 1.5;
  }

  .flip-hint {
    font-size: 0.65rem;
    opacity: 0.6;
    margin-top: 10px;
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const icons = ['📦', '🛡️', '📍'];

export default function FAQ() {
  return (
    <section id="faq">
      <h2 className="section-title">DUDAS FRECUENTES</h2>
      <StyledWrapper>
        <div className="faq-grid">
          {questions.map((item, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span className="icon">{icons[i]}</span>
                  {item.q}
                  <span className="flip-hint">hover para ver →</span>
                </div>
                <div className="flip-card-back">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </section>
  );
}