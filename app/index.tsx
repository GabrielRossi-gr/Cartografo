import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CartografoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cartógrafo</Text>
          <View style={styles.countryBadge}>
            <Text style={styles.countryText}>+55 Brasil</Text>
            <Text style={styles.flagEmoji}>🇧🇷</Text>
          </View>
        </View>

        {/* Card de Endereço */}
        <View style={styles.addressCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Rua/Logradouro:</Text>
            <Text style={styles.value}>Rua do Café</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>Bairro:</Text>
            <Text style={styles.value}>Mollon</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>Cidade:</Text>
            <Text style={styles.value}>Santa Bárbara d'Oeste</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>CEP:</Text>
            <Text style={styles.value}>13456-000</Text>
          </View>
        </View>

        {/* Coordenadas (Lado a Lado) */}
        <View style={styles.coordsRow}>
          <View style={[styles.coordBox, styles.coordBorder]}>
            <Text style={styles.label}>Lat:</Text>
            <Text style={styles.value}>-22.7546945</Text>
          </View>
          <View style={styles.coordBox}>
            <Text style={styles.label}>Lon:</Text>
            <Text style={styles.value}>-22.7546945</Text>
          </View>
        </View>

        {/* Altitude */}
        <View style={styles.altitudeBox}>
          <Text style={styles.label}>Altitude:</Text>
          <Text style={styles.value}>560 metros (↑ nível do mar)</Text>
        </View>

        {/* Stats Pequenos */}
        <View style={styles.statsRow}>
          <Text style={styles.subLabel}>Precisão do sinal: 5 metros</Text>
          <Text style={styles.subLabel}>Velocidade: 0 km/h</Text>
        </View>

        {/* Placeholder do Mapa */}
        <View style={styles.mapContainer}>
          <Image 
            source={{ uri: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-47.3785,-22.7546,14,0/400x250?access_token=SEU_TOKEN' }} 
            style={styles.mapImage}
          />
        </View>

        {/* Botão Pesquisar */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>📍 Pesquisar sua Localização</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#222' },
  container: { padding: 20 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#FFF' },
  countryBadge: { flexDirection: 'row', alignItems: 'center' },
  countryText: { color: '#4ADE80', fontSize: 18, marginRight: 8 },
  flagEmoji: { fontSize: 24 },
  
  addressCard: { 
    backgroundColor: '#1A1A1A', 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333'
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  separator: { height: 1, backgroundColor: '#333', marginVertical: 2 },
  
  coordsRow: { 
    flexDirection: 'row', 
    backgroundColor: '#1A1A1A', 
    borderRadius: 12, 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333'
  },
  coordBox: { flex: 1, flexDirection: 'row', padding: 15, justifyContent: 'space-between' },
  coordBorder: { borderRightWidth: 1, borderRightColor: '#333' },

  altitudeBox: { 
    backgroundColor: '#1A1A1A', 
    borderRadius: 12, 
    padding: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom: 10
  },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  
  label: { color: '#AAA', fontSize: 14 },
  value: { color: '#FFF', fontSize: 14, fontWeight: '500' },
  subLabel: { color: '#666', fontSize: 12 },

  mapContainer: { borderRadius: 20, overflow: 'hidden', marginBottom: 25 },
  mapImage: { width: '100%', height: 200, backgroundColor: '#333' },

  searchButton: { 
    backgroundColor: '#FFD700', 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center' 
  },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#000' }
});