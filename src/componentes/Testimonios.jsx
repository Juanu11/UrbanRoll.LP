import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const reviews = [
  { id: '1', user: '@Santi_Sk8', text: 'La tabla Neon Graffiti aguanta muchisimo el castigo en el Simon. ¡Recomendada!', rating: '⭐⭐⭐⭐⭐' },
  { id: '2', user: '@Mafe_Roll', text: 'El envío a Kennedy fue súper rápido. El scooter llegó perfecto.', rating: '⭐⭐⭐⭐⭐' },
  { id: '3', user: '@ScaleCollector', text: 'El detalle de la tabla es lo maximo por su excelente calidad', rating: '⭐⭐⭐⭐⭐' },
  { id: '3', user: '@Sandy', text: 'Estoy feliz con mi compra', rating: '⭐⭐⭐⭐⭐' },
];

export default function Testimonios() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LO QUE DICE EL PARCHE</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {reviews.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.text}>"{item.text}"</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 30, backgroundColor: '#000' },
  title: { color: '#fbbf24', fontSize: 20, fontWeight: '900', textAlign: 'center', marginBottom: 20 },
  scroll: { paddingLeft: 15 },
  card: { 
    backgroundColor: '#1a1a1a', 
    width: 250, 
    padding: 20, 
    borderRadius: 15, 
    marginRight: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#fbbf24'
  },
  user: { color: '#fbbf24', fontWeight: 'bold', marginBottom: 5 },
  rating: { fontSize: 12, marginBottom: 10 },
  text: { color: '#ccc', fontStyle: 'italic', fontSize: 14, lineHeight: 20 }
});
