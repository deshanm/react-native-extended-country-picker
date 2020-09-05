// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AllowOnlyCountries from './screens/AllowOnlyCountries';
import CountryPickerModal from './screens/CountryPickerModal';
import CountryViewComponent from './screens/CountryViewComponent';
import CustomCountryModal from './screens/CustomCountryModal';
import PhoneNumberCodeSelector from './screens/PhoneNumberCodeSelector';
import UseCountriesOnly from './screens/UseCountriesOnly';
import CustomCountrySearch from './screens/CustomCountrySearch';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="AllowOnlyCountries"
            component={AllowOnlyCountries}
          />
          <Stack.Screen
            name="CountryPickerModal"
            component={CountryPickerModal}
          />
          <Stack.Screen
            name="CountryViewComponent"
            component={CountryViewComponent}
          />
          <Stack.Screen
            name="CustomCountryModal"
            component={CustomCountryModal}
          />
          <Stack.Screen
            name="PhoneNumberCodeSelector"
            component={PhoneNumberCodeSelector}
          />
          <Stack.Screen
            name="CustomCountrySearch"
            component={CustomCountrySearch}
          />
          <Stack.Screen name="UseCountriesOnly" component={UseCountriesOnly} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
