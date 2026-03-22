import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.title}>DOMINA EL ASFALTO</Text>
      <Text style={styles.subtitle}>Bogotá • Skates • Scooters</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  hero: { height: 400, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { color: '#fff', fontSize: 40, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#fbbf24', fontSize: 18, marginTop: 10 }
});
