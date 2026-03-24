import React from 'react';
export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero">
      <div className="hero-content">
        <p style={{color: 'var(--teal)', letterSpacing: '4px'}}>// SKATE · CIUDAD · LIBERTAD</p>
        <h1 className="hero-title">RUEDA<br/><span className="hl">SIN</span><br/>LÍMITES</h1>
        <div style={{display: 'flex', gap: '15px', marginTop: '30px'}}>
          <button onClick={() => handleScroll('beneficios')} className="btn-main">VER MÁS</button>
        </div>
      </div>
    </section>
  );
}
