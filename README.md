# react-native-country-picker

Customizable country picker for react native. No dependencies 

## Installation

```sh
npm install react-native-country-picker
```

## Basic Usage

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
## `CountryView` Component
Just view country flag and text
```
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import { CountryView } from 'react-native-country-picker';

export default function App() {
  return (
    <View>
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

```

![Test Image 3](./example/screenshots/CountryView.png)

| Prop | Type | Description |
| --- | --- | --- |
| `countryCode` | string | code ISO 3166-1 alpha-2 country code. Example: US, UK, JP, IN, DE |
| `flagOnly?` | boolean | Show only Country Code |
| `touchDisabled?` | boolean | Country Code |
| `containerStyle?` | ViewStyle | Country Code |
| `flagStyle?` | ImageStyle | flag is a image. You can change the style |
| `textStyle?` | TextStyle | Text Style of the country text |
| `onPress?` | (country | CountryType) => void | OnPress the Country View Component | 



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
