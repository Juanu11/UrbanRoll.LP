import React from 'react';
import skaterImg from '../assets/ImagenR.jpg';

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Lado izquierdo — texto */}
      <div className="hero-content">
        <p className="hero-tag">// SKATE · CIUDAD · LIBERTAD</p>
        <h1 className="hero-title">
          <span className="hero-title-solid">RUEDA</span>
          <span className="hero-title-teal">SIN</span>
          <span className="hero-title-outline">LÍMITES</span>
        </h1>
        <div className="hero-buttons">
          <button onClick={() => handleScroll('beneficios')} className="btn-main">
            VER MÁS
          </button>
          <button onClick={() => handleScroll('cta-section')} className="btn-secondary">
            ÚNETE AL PARCHE
          </button>
        </div>
      </div>

      {/* Lado derecho — imagen real */}
      <div className="hero-visual">
        <div className="hero-img-wrapper">
          <img src={skaterImg} alt="Rider en Bogotá" className="hero-img" />
          <div className="hero-img-overlay" />
        </div>
        <div className="hero-badge">
          <span>200+</span>
          <small>riders en Bogotá</small>
        </div>
        <div className="hero-badge hero-badge--2">
          <span>🛹</span>
          <small>Skates & Scooters</small>
        </div>
      </div>
    </section>
  );
}