import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: '80px 5%' }}>
      <h2 className="section-title">PREGUNTAS FRECUENTES</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <details style={{ marginBottom: '20px', cursor: 'pointer' }}>
          <summary style={{ fontWeight: 'bold', color: 'var(--teal)' }}>¿Hacen envíos a todo Bogotá?</summary>
          <p>Sí, cubrimos todas las localidades para que no dejes de rodar.</p>
        </details>
      </div>
    </section>
  );
}
