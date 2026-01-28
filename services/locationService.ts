import * as Location from 'expo-location';

export async function getFullLocation() {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') throw new Error('Permissão negada');

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    const { latitude, longitude, altitude, accuracy, speed, heading } = location.coords;

    const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });

    return {
      coords: {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        // Convertendo números para string ou retornando vazio
        altitude: altitude ? altitude.toFixed(1) : "",
        accuracy: accuracy ? accuracy.toFixed(1) : "",
        speed: speed ? (speed * 3.6).toFixed(0) : "0",
        heading: heading ? heading.toString() : "0",
      },
      address: {
        street: address?.street || "",
        district: address?.district || "",
        city: address?.subregion || address?.city || "",
        region: address?.region || "",
        postalCode: address?.postalCode || "",
        country: address?.country || "",
        isoCountryCode: address?.isoCountryCode || "",
      },
      timestamp: new Date(location.timestamp).toLocaleString('pt-BR'),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}