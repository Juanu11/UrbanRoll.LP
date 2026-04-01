import React from 'react';

export default function Beneficios() {
  const items = [
    { title: "Calidad Pro", desc: "Tablas de arce canadiense." },
    { title: "Rapidez", desc: "Entregas el mismo día en Bogotá." },
    { title: "Garantía", desc: "6 meses de soporte total." }
  ];

  return (
    <section id="beneficios">
      <h2 className="section-title">¿POR QUÉ URBANROLL?</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '20px', border: '1px solid rgba(112,203,194,0.3)' }}>
            <h3 style={{ color: 'var(--teal)' }}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
