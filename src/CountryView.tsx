import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { getCountryByCode } from './util';
import type { CountryViewProp } from './types';

const CountryView: React.FC<CountryViewProp> = ({
  countryCode,
  flagOnly,
  onPress,
  touchDisabled,
  containerStyle,
  flagStyle,
  textStyle,
}) => {
  const country = getCountryByCode(countryCode);
  if (!country) {
    return null;
  }
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => (onPress ? onPress(country) : null)}
      disabled={touchDisabled || !onPress}
    >
      <Image
        source={country.img}
        resizeMode="contain"
        style={[styles.flag, flagStyle]}
      />
      {flagOnly ? null : (
        <Text style={[styles.name, textStyle]}>{country.name}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#2F353B',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
  },
  flag: {
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
});

export default CountryView;
