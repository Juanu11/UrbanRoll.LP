import React from 'react';
import "../../styles/App.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-link">
        <span style={{ fontFamily: 'Permanent Marker', color: '#70CBC2', fontSize: '1.8rem' }}>URBANROLL</span>
      </div>
      <button
        className="conocenos"
        onClick={() => document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' })}
      >
        CONÓCENOS
      </button>
    </header>
  );
}