/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { CountryView } from 'react-native-country-picker';

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> {`CountryView `}</Text>
      <CountryView
        countryCode="US"
        flagOnly
        onPress={(country1) =>
          Alert.alert(
            `${country1.code} (${country1.callingCode}): ${country1.name} `
          )
        }
      />

      <Text style={styles.header}> {`CountryView flagOnly`}</Text>
      <CountryView
        countryCode="US"
        onPress={(country) =>
          Alert.alert(
            `${country.code} (${country.callingCode}): ${country.name} `
          )
        }
      />

      <Text style={styles.header}> {`CountryView touchDisabled`}</Text>
      <CountryView countryCode="US" touchDisabled />

      <Text style={styles.header}> {`CountryView touchDisabled flagOnly`}</Text>
      <CountryView countryCode="US" flagOnly touchDisabled />

      <Text style={styles.header}> {`CountryView Custom Text`}</Text>
      <CountryView
        countryCode="US"
        touchDisabled
        containerStyle={{
          marginBottom: 100,
          borderBottomColor: 'red',
          borderBottomWidth: 1,
        }}
        textStyle={{ fontSize: 33, color: 'red' }}
        flagStyle={{ height: 40, width: 60 }}
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
