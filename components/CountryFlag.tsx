import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';

// 1. Definimos a interface
interface CountryFlagProps {
  isoCode: string | undefined | null;
  size?: 16 | 24 | 32 | 48 | 64;
  style?: ViewStyle;
}

// 2. Aplicamos a interface ao componente
const CountryFlag: React.FC<CountryFlagProps> = ({ isoCode, size = 64, style }) => {
  
  // Garantimos que o código esteja em caixa alta para a API
  const code = isoCode?.toUpperCase();

  // Se não houver código, não renderiza nada
  if (!code) return null;

  return (
    <View style={[styles.container, style]}>
      <Image
        source={{ uri: `https://flagsapi.com/${code}/flat/${size}.png` }}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CountryFlag;