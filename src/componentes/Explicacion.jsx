import React from 'react';

export default function Explicacion() {
  return (
    <section id="explicacion" style={{ padding: '80px 5%', background: 'rgba(112, 203, 194, 0.05)' }}>
      <h2 className="section-title">¿CÓMO FUNCIONA EL PARCHE?</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem' }}>🛒</div>
          <h3 style={{ color: 'var(--teal)', margin: '15px 0' }}>1. Eliges tu Nave</h3>
          <p>Seleccionas el skate o scooter que más se acomode a tu estilo de vida en Bogotá.</p>
        </div>
        <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem' }}>⚡</div>
          <h3 style={{ color: 'var(--teal)', margin: '15px 0' }}>2. Alistamiento Pro</h3>
          <p>Configuramos y probamos cada rodamiento y motor antes de que salga de nuestra bodega.</p>
        </div>
        <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem' }}>🏁</div>
          <h3 style={{ color: 'var(--teal)', margin: '15px 0' }}>3. A Rodar</h3>
          <p>Recibes tu equipo y te enviamos la invitación a nuestro próximo punto de encuentro.</p>
        </div>
      </div>
    </section>
  );
}
