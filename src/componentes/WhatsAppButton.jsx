import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

export default function WhatsAppButton() {
  const openWA = () => Linking.openURL('https://wa.me/573000000000'); // Cambia por tu número

  return (
    <TouchableOpacity style={styles.fab} onPress={openWA}>
      <Text style={styles.icon}>WA</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  fab: { 
    position: 'absolute', bottom: 20, right: 20, 
    backgroundColor: '#25D366', width: 60, height: 60, 
    borderRadius: 30, justifyContent: 'center', alignItems: 'center',
    elevation: 5, shadowColor: '#000', shadowOpacity: 0.3
  },
  icon: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});
