import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import countries from './countries';
import type { CountryType, CountryListProp } from './types';

const CountryList: React.FC<CountryListProp> = ({
  onSelect,
  data,
  selectedCountryCode,
  renderText,
}) => {
  let listOfCountries = data;
  if (!listOfCountries) {
    listOfCountries = countries;
  }

  return (
    <FlatList
      data={listOfCountries.sort((a: CountryType, b: CountryType) =>
        a.name.localeCompare(b.name)
      )}
      renderItem={({ item, index }: { item: CountryType; index: number }) => {
        const countryTextStyle =
          selectedCountryCode === item.code ? styles.selectedText : styles.text;
        return (
          <>
            {index === 0 ? <View style={styles.topRow} /> : null}
            <TouchableOpacity
              style={styles.countryRow}
              onPress={() => onSelect(item)}
            >
              <Image source={item.img} style={styles.countryFlag} />
              <Text style={countryTextStyle}>
                {renderText ? renderText(item) : item.name}
              </Text>
            </TouchableOpacity>
          </>
        );
      }}
      keyExtractor={(item: CountryType) => item.code}
    />
  );
};

const styles = StyleSheet.create({
  topRow: { marginTop: 15 },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  text: {
    color: '#2F353B',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
  },
  selectedText: {
    color: '#2F353B',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
  },
  countryFlag: {
    marginRight: 10,
  },
});

export default CountryList;
