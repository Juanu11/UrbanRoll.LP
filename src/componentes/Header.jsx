import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>URBANROLL</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: { height: 60, backgroundColor: '#fbbf24', justifyContent: 'center', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: 20, color: '#000' }
});
