import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .beneficios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 28px;
    margin-top: 20px;
  }

  .card {
    width: 100%;
    background-image: linear-gradient(163deg, #70CBC2 0%, #05172F 100%);
    border-radius: 20px;
    transition: all 0.3s;
    cursor: default;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(112, 203, 194, 0.4);
  }

  .card2 {
    background-color: #05172F;
    border-radius: 20px;
    transition: all 0.2s;
    padding: 36px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
    margin: 3px;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card-icon {
    font-size: 2.5rem;
  }

  .card-title {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.3rem;
    color: #70CBC2;
  }

  .card-desc {
    font-family: 'Space Mono', monospace;
    font-size: 0.82rem;
    color: rgba(240, 244, 248, 0.75);
    line-height: 1.6;
  }
`;

const items = [
  {
    icon: '🛹',
    title: 'Calidad Pro',
    desc: 'Tablas de arce canadiense seleccionadas para el parche bogotano.'
  },
  {
    icon: '⚡',
    title: 'Rapidez',
    desc: 'Entregas el mismo día en Bogotá si pides antes de las 2 PM.'
  },
  {
    icon: '🛡️',
    title: 'Garantía',
    desc: '6 meses de soporte total en tablas y scooters. Sin rollos.'
  }
];

export default function Beneficios() {
  return (
    <section id="beneficios">
      <h2 className="section-title">¿POR QUÉ URBANROLL?</h2>
      <StyledWrapper>
        <div className="beneficios-grid">
          {items.map((item, i) => (
            <div className="card" key={i}>
              <div className="card2">
                <span className="card-icon">{item.icon}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </section>
  );
}