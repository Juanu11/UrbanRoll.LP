import React from 'react';

export default function FAQ() {
  const questions = [
    { q: "¿Hacen envíos a todo Bogotá?", a: "¡Claro! Entregamos el mismo día si pides antes de las 2 PM." },
    { q: "¿Tienen garantía?", a: "Todas nuestras tablas y scooters tienen 6 meses de garantía por defectos de fábrica." },
    { q: "¿Dónde son los encuentros?", a: "Rodamos todos los jueves en el Park Way y los domingos en la ciclovía." }
  ];

  return (
    <section id="faq">
      <h2 className="section-title">DUDAS FRECUENTES</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {questions.map((item, i) => (
          <div key={i} style={{ marginBottom: '20px', borderBottom: '1px solid rgba(112,203,194,0.2)', paddingBottom: '10px' }}>
            <h3 style={{ color: 'var(--teal)', marginBottom: '5px' }}>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
