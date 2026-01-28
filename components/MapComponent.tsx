import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MapProps {
  dados: any;
}

export default function MapComponent({ dados }: MapProps) {
  return (
    <View style={styles.webFallback}>
      <Text style={styles.emoji}>📍</Text>
      <Text style={styles.text}>Mapa disponível apenas no celular</Text>
      {dados && (
        <Text style={{color: '#4ADE80', marginTop: 10}}>
          Lat: {dados.coords.latitude} | Lon: {dados.coords.longitude}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  webFallback: { flex: 1, backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center' },
  emoji: { fontSize: 30, marginBottom: 10 },
  text: { color: '#666', textAlign: 'center' }
});