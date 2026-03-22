import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const productos = [
  { 
    id: '1', 
    vendedor: 'SKOTTERS OFICIAL',
    nombre: 'Skate Neon Graffiti Pro - Madera Arce Canadiense', 
    precio: 189900,
    descuento: '15% OFF',
    estrellas: '4.9 (124)',
    img: 'https://http2.mlstatic.com/D_NQ_NP_745146-MLM73442897181_122023-O.webp'
  },
  { 
    id: '2', 
    vendedor: 'SKOTTERS OFICIAL',
    nombre: 'Tabla De Skate Patineta Patín Skateboard Diseño Variados Profesional', 
    precio: 500000,
    descuento: '10% OFF',
    estrellas: '4.8 (36)',
    img: 'https://exitocol.vtexassets.com/arquivos/ids/27200330/tabla-de-skate-patineta-patin-skateboard-diseno-variados-profesional.jpg?v=638796585833600000'
  },
   { 
    id: '3', 
    vendedor: 'SKOTTERS OFICIAL',
    nombre: 'Scooter Street Art E-Pro Motor 350W Autonomía 25km', 
    precio: 1250000,
    descuento: '10% OFF',
    estrellas: '4.8 (89)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sKmek2l8u4h-fmm1IdR_19IiplAwzwcNlw&s'
  },
  { 
    id: '3', 
    vendedor: 'SKOTTERS OFICIAL',
    nombre: 'Envy Prodigy X One Street Complete Black Scooter', 
    precio: 320000,
    descuento: '5% OFF',
    estrellas: '5.0 (45)',
    img: 'https://5150skateshop.com/cdn/shop/files/envy-prodigy-x-one-street-complete-black-scooter-4439252.jpg?v=1763680215&width=1200'
  }
];

export default function Productos() {
  const formatearPrecio = (valor) => {
    return '$ ' + valor.toLocaleString('es-CO');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>OFERTAS DEL PARCHE</Text>
      <View style={styles.grid}>
        {productos.map(item => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.img }} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.info}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>OFERTA DEL DÍA</Text>
              </View>
              <Text style={styles.vendedor}>Por {item.vendedor}</Text>
              <Text style={styles.name} numberOfLines={2}>{item.nombre}</Text>
              <Text style={styles.rating}>⭐ {item.estrellas}</Text>
              <Text style={styles.price}>{formatearPrecio(item.precio)}</Text>
              <Text style={styles.discount}>{item.descuento}</Text>
              <Text style={styles.envio}>Envío gratis a Bogotá</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#000' },
  sectionTitle: { fontSize: 20, fontWeight: '900', color: '#fbbf24', marginBottom: 15, marginLeft: 5, letterSpacing: 1 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { 
    width: '48%', 
    backgroundColor: '#111', 
    borderRadius: 12, 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#222',
    overflow: 'hidden'
  },
  imageContainer: { width: '100%', height: 150, padding: 10, backgroundColor: '#fff' },
  image: { width: '100%', height: '100%' },
  info: { padding: 12 },
  badge: { backgroundColor: '#fbbf24', paddingVertical: 2, paddingHorizontal: 6, borderRadius: 4, alignSelf: 'flex-start', marginBottom: 8 },
  badgeText: { color: '#000', fontSize: 9, fontWeight: 'bold' },
  vendedor: { fontSize: 10, color: '#666', marginBottom: 5 },
  name: { fontSize: 13, color: '#fff', fontWeight: '500', height: 35, marginBottom: 8 },
  rating: { fontSize: 11, color: '#fbbf24', marginBottom: 5 },
  price: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
  discount: { fontSize: 12, color: '#4ade80', fontWeight: 'bold', marginTop: 2 },
  envio: { fontSize: 11, color: '#4ade80', marginTop: 8, fontWeight: '600' }
});
