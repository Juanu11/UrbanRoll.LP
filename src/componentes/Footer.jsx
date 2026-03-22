import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const faqs = [
  { q: '¿Hacen envíos a todo Bogotá?', a: 'Sí, cubrimos desde Usaquén hasta Bosa y municipios aledaños.' },
  { q: '¿Puedo recoger mi pedido?', a: '¡Claro! Estamos cerca de Corferias para entregas personales.' },
  { q: '¿Qué medios de pago aceptan?', a: 'Nequi, Daviplata y transferencias NuBank.' }
];

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PREGUNTAS FRECUENTES</Text>
      {faqs.map((item, index) => (
        <View key={index} style={styles.faqBox}>
          <Text style={styles.question}>• {item.q}</Text>
          <Text style={styles.answer}>{item.a}</Text>
        </View>
      ))}
      
      <View style={styles.socialBar}>
        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
          <Text style={styles.socialLink}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://tiktok.com')}>
          <Text style={styles.socialLink}>TIKTOK</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.copy}>© 2026 URBANROLL - SKOTTERS BOGOTÁ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, backgroundColor: '#0a0a0a', borderTopWidth: 2, borderTopColor: '#fbbf24' },
  title: { color: '#fbbf24', fontSize: 18, fontWeight: '900', marginBottom: 20, textAlign: 'center' },
  faqBox: { marginBottom: 15 },
  question: { color: '#fbbf24', fontWeight: 'bold', fontSize: 14, marginBottom: 5 },
  answer: { color: '#888', fontSize: 13, lineHeight: 18, paddingLeft: 10 },
  socialBar: { flexDirection: 'row', justifyContent: 'center', marginTop: 30, gap: 20 },
  socialLink: { color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline' },
  copy: { color: '#444', fontSize: 10, textAlign: 'center', marginTop: 40, letterSpacing: 2 }
});
