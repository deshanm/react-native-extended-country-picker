import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ExtendedCountryPicker from 'react-native-country-picker';

export default function App() {
  const [country, setCountry] = React.useState<any>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Default Country Picker</Text>
      <ExtendedCountryPicker
        countryCode={country?.code}
        onSelect={(value) => setCountry(value)}
      />
      <Text style={styles.header}> Country Picker with Default Value</Text>
      <ExtendedCountryPicker
        countryCode={'US'}
        onSelect={(value) => setCountry(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
