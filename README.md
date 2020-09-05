# react-native-country-picker

Customizable country picker for react native. No dependencies 

## Installation

```sh
npm install react-native-country-picker
```

## Usage

```js
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ExtendedCountryPicker from 'react-native-country-picker';

export default function App() {
  const [country, setCountry] = React.useState<any>(null);

  return (
    <View style={styles.container}>
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
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
