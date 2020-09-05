import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Search Countries </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
  },
});
