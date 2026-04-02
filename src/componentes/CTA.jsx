import React from 'react';
export default function CTA() {
  return (
    <section id="cta" style={{ padding: '60px 5%', textAlign: 'center', background: 'var(--teal)', color: 'white' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>¿LISTO PARA RODAR?</h2>
      <p style={{ marginBottom: '30px' }}>Únete a la comunidad más grande de Bogotá.</p>
      <button style={{ padding: '15px 30px', background: 'white', color: 'var(--teal)', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>VER EQUIPAMIENTO</button>
    </section>
  );
}
