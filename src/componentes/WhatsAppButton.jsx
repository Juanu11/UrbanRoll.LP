import React from 'react';

export default function WhatsAppButton() {
  const mensaje = "Hola UrbanRoll! Quiero más info sobre los skates y scooters.";
  const url = "https://wa.me/573000000000?text=" + encodeURIComponent(mensaje); // Cambia el número por el tuyo

  return (
    <a href={url} target="_blank" rel="noreferrer" style={{
      position: 'fixed', bottom: '30px', right: '30px',
      background: '#25D366', color: 'white', width: '60px', height: '60px',
      borderRadius: '50%', display: 'flex', justifyContent: 'center',
      alignItems: 'center', fontSize: '30px', textDecoration: 'none',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)', zIndex: 9999
    }}>
      <span role="img" aria-label="whatsapp">💬</span>
    </a>
  );
}
