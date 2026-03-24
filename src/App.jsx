import React from 'react';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import Beneficios from './componentes/Beneficios';
import CTA from './componentes/CTA';
import Explicacion from './componentes/Explicacion';
import Testimonios from './componentes/Testimonios';
import FAQ from './componentes/FAQ';
import PreFooter from './componentes/PreFooter';
import Footer from './componentes/Footer';
import WhatsAppButton from './componentes/WhatsAppButton';
import './styles/App.css';

function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <CTA title="¡ASEGURA LA TUYA!" />
        <Explicacion />
        <Testimonios />
        <CTA title="ÚNETE AL PARCHE" />
        <FAQ />
        <PreFooter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
export default App;
