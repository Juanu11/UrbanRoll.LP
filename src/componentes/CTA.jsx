import React from 'react';

export default function CTA({ title }) {
  return (
    <section id="cta-section" className="cta-box">
      <h3>{title}</h3>
      <button className="btn-main" style={{ marginTop: '20px' }}>LO QUIERO</button>
    </section>
  );
}
