import React from 'react';
export default function Beneficios() {
  return (
    <section id="beneficios" style={{ padding: '80px 5%' }}>
      <h2 className="section-title">BENEFICIOS PRO</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #eee' }}>
          <h3>Garantía Real</h3>
          <p>Soporte técnico directo en Bogotá para tu tabla o scooter.</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #eee' }}>
          <h3>Repuestos</h3>
          <p>Contamos con stock permanente de ruedas, motores y lijas.</p>
        </div>
      </div>
    </section>
  );
}
