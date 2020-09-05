import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> You can allow only specific countries </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    marginTop: 20,
  },
});
