import React from 'react';

export default function CTA({ title }) {
  return (
    <section className="cta-box">
      <h2 style={{ marginBottom: '20px', fontFamily: 'Permanent Marker' }}>{title}</h2>
      <button className="btn-main" onClick={() => window.open('https://wa.me/573000000000', '_blank')}>
        QUIERO MI TABLA
      </button>
    </section>
  );
}
