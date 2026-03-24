import React from 'react';

export default function PreFooter() {
  return (
    <section id="prefooter" style={{ padding: '60px 5%', textAlign: 'center', borderTop: '1px solid rgba(112,203,194,0.1)' }}>
      <h2 style={{ fontFamily: 'Permanent Marker', fontSize: '2rem', marginBottom: '20px' }}>
        ¿LISTO PARA CAMBIAR CÓMO TE MUEVES?
      </h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 30px auto', opacity: '0.8' }}>
        Únete a los más de 200 riders en Bogotá que ya dejaron el trancón atrás. UrbanRoll no es solo una tienda, es tu entrada al parche.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <span style={{ color: 'var(--teal)' }}>#UrbanRollBogota</span>
        <span style={{ color: 'var(--teal)' }}>#SkateLife</span>
      </div>
    </section>
  );
}
