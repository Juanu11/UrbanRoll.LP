import React from 'react';
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
    color: #05172F;
  }

  .cta-sub {
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    margin-bottom: 32px;
    opacity: 0.75;
  }

  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-cta-primary {
    background: #05172F;
    color: #70CBC2;
    padding: 16px 40px;
    border: none;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(5, 23, 47, 0.3);
  }

  .btn-cta-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(5, 23, 47, 0.4);
    background: #0a2a4a;
  }

  .btn-cta-secondary {
    background: transparent;
    color: #05172F;
    padding: 16px 40px;
    border: 2px solid #05172F;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 2px;
    transition: all 0.3s ease;
  }

  .btn-cta-secondary:hover {
    background: rgba(5, 23, 47, 0.1);
    transform: translateY(-3px);
  }
`;

export default function CTA({ title }) {
  return (
    <StyledCTA id="cta-section" className="cta-box">
      <h3 className="cta-title">{title || 'ÚNETE AL PARCHE'}</h3>
      <p className="cta-sub">Más de 200 riders ya ruedan con nosotros en Bogotá</p>
      <div className="cta-buttons">
        <button className="btn-cta-primary">LO QUIERO</button>
        <button className="btn-cta-secondary">VER CATÁLOGO</button>
      </div>
    </StyledCTA>
  );
}