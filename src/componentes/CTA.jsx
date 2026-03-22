import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CTA() {
  const [email, setEmail] = useState('');
  const handleRegister = () => {
    Alert.alert('¡Bienvenido!', 'Te avisaremos de los próximos eventos de Skotters');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder='Tu correo electrónico' 
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>REGISTRARME</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 40, backgroundColor: '#fbbf24', alignItems: 'center' },
  text: { fontWeight: 'bold', fontSize: 20, marginBottom: 15, color: '#000' },
  input: { backgroundColor: '#fff', width: '100%', padding: 10, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: '#000', padding: 15, borderRadius: 5, width: '100%' },
  buttonText: { color: '#fbbf24', fontWeight: 'bold', textAlign: 'center' }
});
