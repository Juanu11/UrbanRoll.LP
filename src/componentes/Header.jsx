import React from 'react';
import "../../styles/App.css";
import Logo from '../assets/1F.svg';

export default function Header() {
  return (
    <header className="header">
      <a
        href="#hero"
        className="logo-link"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <img src={Logo} alt="UrbanRoll Logo" className="logo-img" />
        <span className="logo-text">URBANROLL</span>
      </a>
      <button
        className="conocenos"
        onClick={() => document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' })}
      >
        CONÓCENOS
      </button>
    </header>
  );
}