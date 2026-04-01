import React from 'react';

export default function Testimonios() {
  const reviews = [
    { nombre: "Julian Maldonado", texto: "La tabla de arce es de otro nivel, el pop que tiene es increíble para los trucos en el Parkway.", emoji: "🛹" },
    { nombre: "Johan Torres", texto: "El scooter eléctrico me salvó la vida con el trancón de la 80. ¡Llega súper rápido!", emoji: "⚡" }
  ];

  return (
    <section id="testimonios">
      <h2 className="section-title">LO QUE DICE EL PARCHE</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {reviews.map((r, i) => (
          <div key={i} style={{ background: '#0a2a4a', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--teal)' }}>
            <p style={{ fontStyle: 'italic' }}>"{r.texto}"</p>
            <p style={{ marginTop: '10px', fontWeight: 'bold', color: 'var(--teal)' }}>{r.emoji} {r.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
