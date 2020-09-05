import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Modal,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import countries from './countries';
import CountryView from './CountryView';
import CountryList from './CountryList';
import { filterCountriesByQuery, getCountryByCode } from './util';
import type { CountryType, CountryPickerProp } from './types';

const CountryPicker: React.FC<CountryPickerProp> = ({
  onSelect,
  countryCode,
}) => {
  const [visible, setVisible] = useState(false);
  const [countryList, setCountryList] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>();

  useEffect(() => {
    if (countryCode) {
      const newCountry = getCountryByCode(countryCode);
      setSelectedCountry(newCountry);
    } else {
      setSelectedCountry(null);
    }
  }, [countryCode]);

  const toggleOverlay = () => {
    setVisible(!visible);
    if (visible) {
      setCountryList(countries);
    }
  };

  const filterCountries = (value: string) => {
    const filteredCountries = filterCountriesByQuery(value);
    setCountryList(filteredCountries);
  };

  const handleSelect = (country: CountryType) => {
    setSelectedCountry(country);
    toggleOverlay();
    if (onSelect) {
      onSelect(country);
    }
  };

  return (
    <>
      {selectedCountry ? (
        <CountryView
          onPress={toggleOverlay}
          countryCode={selectedCountry.code}
        />
      ) : (
        <Text onPress={toggleOverlay}> Select a Country</Text>
      )}

      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        presentationStyle={'formSheet'}
        onRequestClose={() => {
          toggleOverlay();
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.closeIcon} onPress={toggleOverlay}>
            Close
          </Text>
          <Text style={styles.headingText}>Choose a Country</Text>
          <TextInput
            placeholder="Search"
            onChangeText={(text: string) => filterCountries(text)}
            style={styles.searchTextInput}
          />
          <CountryList
            data={countryList.sort((a: CountryType, b: CountryType) =>
              a.name.localeCompare(b.name)
            )}
            selectedCountryCode={selectedCountry?.code}
            onSelect={(item) => handleSelect(item)}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 100 : 50,
  },
  searchTextInput: {
    fontSize: 16,
    width: '88.5%',
    padding: 0,
  },
  closeIcon: {
    marginLeft: 'auto',
    marginTop: 5,
    marginRight: 5,
  },
  headingText: {
    color: '#2F353B',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'left',
  },
});

export default CountryPicker;
