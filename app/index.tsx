import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapComponent from '../components/MapComponent';
import { getFullLocation } from '../services/locationService';

interface LocationData {
  coords: {
    latitude: string;
    longitude: string;
    altitude: string;
    accuracy: string;
    speed: string;
    heading: string;
  };
  address: {
    street: string;
    district: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    isoCountryCode: string;
  };
  timestamp: string;
}

const BRASIL_REGION = {
  latitude: -14.2350,
  longitude: -51.9253,
  latitudeDelta: 35, // Zoom amplo para ver o país todo
  longitudeDelta: 35,
};


export default function CartografoScreen() {

  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState<LocationData | null>(null); // Aqui ficará o objeto retornado pela função


  const handleSearchLocation = async () => {
    setLoading(true);
    const result = await getFullLocation();
    
    if (result) {
      setDados(result);
      console.log(dados) //para ver no terminal
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>

        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cartógrafo</Text>
          <View style={styles.countryBadge}>
            <Text style={styles.countryText}>{dados?.address.isoCountryCode ?? "ND#"} {dados?.address.country ?? "ND#"}</Text>
            <Text style={styles.flagEmoji}>BR</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          
          {/* Card de Endereço --------------------------------------------*/}
          <View style={styles.addressCard}>
            <View style={styles.row}>
              <Text style={styles.label}>Rua/Logradouro:</Text>
              <Text style={styles.value}> {dados?.address.street ?? "Não encontrado!!"} </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
              <Text style={styles.label}>Bairro:</Text>
              <Text style={styles.value}> {dados?.address.district ?? "Não encontrado!!"} </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
              <Text style={styles.label}>Cidade:</Text>
              <Text style={styles.value}> {dados?.address.city ?? "Não encontrado!!"} </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
              <Text style={styles.label}>CEP:</Text>
              <Text style={styles.value}> {dados?.address.postalCode ?? "Não encontrado!!"} </Text>
            </View>
          </View>


          {/* Coordenadas (Lado a Lado) */}
          <View style={styles.coordsRow}>
            <View style={[styles.coordBox, styles.coordBorder]}>
              <Text style={styles.label}>Lat:</Text>
              <Text style={styles.value}> {dados?.coords.latitude ?? "ND#"} </Text>
            </View>
            <View style={styles.coordBox}>
              <Text style={styles.label}>Lon:</Text>
              <Text style={styles.value}> {dados?.coords.longitude ?? "ND#"} </Text>
            </View>
          </View>



          {/* Altitude */}
          <View style={styles.altitudeBox}>
            <Text style={styles.label}>Altitude:</Text>
            <Text style={styles.value}>
              {dados?.coords.altitude 
                ? `${dados.coords.altitude} metros (↑ nível do mar)` 
                : "Não encontrado!!"}
            </Text>
          </View>



          {/* Stats Pequenos */}
          <View style={styles.statsRow}>
            <Text style={styles.subLabel}>Precisão do sinal: {dados?.coords.accuracy ?? "0"} metros</Text>
            <Text style={styles.subLabel}>Velocidade: {dados?.coords.speed ?? "0"} km/h</Text>
          </View>



          {/* Placeholder do Mapa */}
          <View style={styles.mapContainer}>
            <MapComponent dados={dados} />
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>

      
        

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.searchButton, loading && { backgroundColor: '#CCAC00' }]} 
            activeOpacity={0.8}
            onPress={handleSearchLocation}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text style={styles.buttonText}>📍 Pesquisar sua Localização</Text>
            )}
          </TouchableOpacity>
        </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#3A3A3C' },
  container: { padding: 20 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'baseline', 
    paddingHorizontal: 20,
    paddingTop: 38,
    paddingBottom: 0, 
    marginBottom: 0 
  },
  headerTitle: { fontSize: 30, fontWeight: 'bold', color: '#FFF' },
  countryBadge: { flexDirection: 'row', alignItems: 'center' },
  countryText: { color: '#4ADE80', fontSize: 18, marginRight: 8 },
  flagEmoji: { fontSize: 24 },
  


  addressCard: { 
    backgroundColor: '#1C1C1E', 
    borderRadius: 12, 
    //paddingHorizontal: 15,
    paddingLeft: 15,
    paddingVertical: 4,
    paddingRight: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  separator: { height: 0.5, backgroundColor: '#545458', marginLeft: 2},
  

  
  coordsRow: { 
    flexDirection: 'row', 
    backgroundColor: '#1C1C1E', 
    borderRadius: 12, 
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#333'
  },
  coordBox: { flex: 1, flexDirection: 'row', paddingLeft: 15, paddingVertical: 12, justifyContent: 'space-between' },
  coordBorder: { borderRightWidth: 1, borderRightColor: '#333' },



  altitudeBox: { 
    backgroundColor: '#1C1C1E', 
    borderRadius: 12, 
    paddingLeft: 15,
    paddingVertical: 12, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 8
  },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  


  //label: { color: '#ffffff', fontSize: 14 },
  //value: { color: '#8E8E93', fontSize: 14 },
  label: { color: '#ffffff', fontSize: 14 },
  value: { color: '#b3b3b9', fontSize: 14, paddingRight: 15},
  //label: { color: '#c6c6cc', fontSize: 14 },
  //value: { color: '#FFFFFF', fontSize: 14 },
  


  subLabel: { color: '#8E8E93', fontSize: 13 },



  mapContainer: {
    height: 250,          // Altura fixa para o mapa no celular
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',    // Garante que o mapa respeite o arredondamento das bordas
    backgroundColor: '#1A1A1A',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  map: {width: '100%', height: '100%'},
 

  
  buttonContainer: {
    position: 'absolute', // Faz ele flutuar
    bottom: 30,           // Distância da borda inferior
    left: 20,
    right: 20,
    elevation: 5,         // Sombra no Android
    shadowColor: '#000',  // Sombra no iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  searchButton: { 
    backgroundColor: '#FFD700', 
    padding: 18, 
    borderRadius: 15, 
    alignItems: 'center',
    width: '100%'
  },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#000' }
});