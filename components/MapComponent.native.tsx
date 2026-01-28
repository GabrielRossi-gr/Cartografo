import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


// Definimos o que o componente pode receber
interface MapProps {
  dados: any; // Ou use a interface LocationData se quiser ser mais rigoroso
}

export default function MapComponent({ dados }: MapProps) {

  const BRASIL_REGION = {
    latitude: -14.2350,
    longitude: -51.9253,
    latitudeDelta: 35,
    longitudeDelta: 35,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={dados ? {
        latitude: parseFloat(dados.coords.latitude),
        longitude: parseFloat(dados.coords.longitude),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      } : BRASIL_REGION}
    >
      {dados && (
        <Marker
          coordinate={{
            latitude: parseFloat(dados.coords.latitude),
            longitude: parseFloat(dados.coords.longitude),
          }}
          title="Sua Localização"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { width: '100%', height: '100%' },
});