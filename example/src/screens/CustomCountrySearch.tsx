import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { filterCountriesByQuery } from 'react-native-country-picker';

export default function Screen() {
  const [text, setText] = React.useState('');
  const countries = filterCountriesByQuery(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(t) => setText(t)}
        value={text}
      />
      {countries.map((country) => (
        <Text key={country.code}>
          {country.name} {country.callingCode}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    textAlign: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
    fontSize: 20,
  },
});
