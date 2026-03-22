import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from './src/componentes/Header';
import Hero from './src/componentes/Hero';
import Productos from './src/componentes/Productos';
import Testimonios from './src/componentes/Testimonios';
import CTA from './src/componentes/CTA';
import Footer from './src/componentes/Footer';
import WhatsAppButton from './src/componentes/WhatsAppButton';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#000' }}>
        <Header />
        <Hero />
        <Productos />
        <Testimonios />
        <CTA />
        <Footer />
      </ScrollView>
      <WhatsAppButton />
    </View>
  );
}
