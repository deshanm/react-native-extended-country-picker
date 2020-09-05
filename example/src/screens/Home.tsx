import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('AllowOnlyCountries')}
        title="AllowOnlyCountries"
      />
      <Button
        onPress={() => navigation.navigate('CountryPickerModal')}
        title="CountryPickerModal"
      />
      <Button
        onPress={() => navigation.navigate('CountryViewComponent')}
        title="CountryViewComponent"
      />
      <Button
        onPress={() => navigation.navigate('CustomCountryModal')}
        title="CustomCountryModal"
      />
      <Button
        onPress={() => navigation.navigate('PhoneNumberCodeSelector')}
        title="PhoneNumberCodeSelector"
      />

      <Button
        onPress={() => navigation.navigate('CustomCountrySearch')}
        title="CustomCountrySearch"
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
});
