# react-native-extended-country-picker

Country picker for react native. No dependencies. This module is developed to view the Country Flag by Country Code. This is also support for CountryPicker Modal and util functions. This is inspired by https://www.npmjs.com/package/react-native-extended-country-picker-modal

## Installation

```sh
npm install react-native-extended-country-picker
```

## Basic Usage

```js
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ExtendedCountryPicker from 'react-native-extended-country-picker';

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
import { CountryView } from 'react-native-extended-country-picker';

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

![CountryView](./example/screenshots/CountryView.png)

| Prop | Type | Description |
| --- | --- | --- |
| `countryCode` | string | code ISO 3166-1 alpha-2 country code. Example: US, UK, JP, IN, DE |
| `flagOnly?` | boolean | Show only Country Code |
| `touchDisabled?` | boolean | Country Code |
| `containerStyle?` | ViewStyle | Country Code |
| `flagStyle?` | ImageStyle | flag is a image. You can change the style |
| `textStyle?` | TextStyle | Text Style of the country text |
| `onPress?` | (country | CountryType) => void | OnPress the Country View Component | 


## `CountryList` Component
List of Country that can be used in Your own modal

```

import * as React from 'react';
import { View } from 'react-native';
import { CountryList } from 'react-native-extended-country-picker';

export default function App() {
  return (
    <View>
      <CountryList
        onSelect={value=> console.log(value)}
        selectedCountry={'US'}
      />
    </View>
  );
}


```

![CountryList](./example/screenshots/CountryView.png)

| Prop | Type | Description |
| --- | --- | --- |
| `onSelect`| (value: CountryType) => void| When user click on the country this will triggers |
| `selectedCountryCode?`| string | default or selected country code |
| `data?`| CountryType[] | You can set custom country list. Your own country list |
| `renderText?`| (country: CountryType) => ReactNode, string | You can change the show country should render |


## `CountryPicker` Component
This is a complete solution for the Country Picker Modal

```

import * as React from 'react';
import { View } from 'react-native';
import { CountryList } from 'react-native-extended-country-picker';

export default function App() {
  return (
    <View>
      <CountryList
        onSelect={value=> console.log(value)}
        selectedCountry={'US'}
      />
    </View>
  );
}


```

![CountryList](./example/screenshots/CountryView.png)

| Prop | Type | Description |
| --- | --- | --- |
| `onSelect`| (value: CountryType) => void| When user click on the country this will triggers |
| `countryCode?`| string | default or selected country code |

## Utility functions

### `countries` json
You can get list of countries like this


```

import * as React from 'react';
import { countries } from 'react-native-extended-country-picker';

export default function App() {
  console.log('countries',countries);
  return (
    <View>
      ....
    </View>
  );
}


```

### `getCountryByCode` function
You can get country by code


```

import * as React from 'react';
import { getCountryByCode } from 'react-native-extended-country-picker';

export default function App() {
  console.log('getCountryByCode',getCountryByCode('US'));
  return (
    <View>
      ....
    </View>
  );
}


```

### `filterCountriesByQuery` function
You can get country by code


```

import * as React from 'react';
import { filterCountriesByQuery } from 'react-native-extended-country-picker';

export default function App() {
  console.log('filterCountriesByQuery',filterCountriesByQuery('United'));
  return (
    <View>
      ....
    </View>
  );
}


```

## Prop Types - `CountryType`

| Prop | Type | Description |
| --- | --- | --- |
| `code` | string | code ISO 3166-1 alpha-2 country code. Example: US, UK, JP, IN, DE |
| `name?` | string | Long Name of the Country |
| `callingCode?` | string | Phone number code of the country |
| `img?` | ImageSourcePropType | Source of the image flag |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## TODO
- [x] Complete basic requirement
- [x] Setup Unit and Component Tests
- [x] Integrate with Circle CI
- [x] Publish to npm
- [ ] 100% test coverage
- [ ] Add more prop types

## Alternative Solutions
- https://www.npmjs.com/package/react-native-extended-country-picker-modal
- https://www.npmjs.com/package/react-native-extended-country-picker-modal-fix

## License

MIT
