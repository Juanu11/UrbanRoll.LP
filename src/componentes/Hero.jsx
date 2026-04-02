import React from 'react';
export default function Hero() {
  return (
    <section style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0f12', color: 'white', textAlign: 'center', padding: '0 5%' }}>
      <div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontFamily: "'Permanent Marker', cursive" }}>DOMINA LA CALLE</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>Skates y Scooters de alto rendimiento para el parche en Bogotá.</p>
        <button style={{ padding: '15px 40px', background: 'var(--teal)', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>VER EQUIPAMIENTO</button>
      </div>
    </section>
  );
}
