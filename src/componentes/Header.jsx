import React from 'react';
export default function Header() {
  return (
    <header className="header">
      <div className="logo-link">
        <span style={{ fontFamily: 'Permanent Marker', color: '#70CBC2', fontSize: '1.8rem' }}>URBANROLL</span>
      </div>
      <button className="btn-register">REGISTRARSE</button>
    </header>
  );
}
