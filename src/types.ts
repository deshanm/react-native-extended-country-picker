import type {
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import type { ReactNode } from 'react';

export interface CountryType {
  code: string;
  name: string;
  callingCode: string;
  img: ImageSourcePropType;
}

export interface CountryListProp {
  onSelect: (value: CountryType) => void;
  selectedCountryCode?: string;
  data?: CountryType[];
  renderText?: (country: CountryType) => ReactNode | string;
}

export interface CountryPickerProp {
  onSelect?: (value: CountryType) => void;
  countryCode?: string;
}

export interface CountryViewProp {
  countryCode: string;
  flagOnly?: boolean;
  touchDisabled?: boolean;
  onPress?: (country: CountryType) => void;
  containerStyle?: ViewStyle;
  flagStyle?: ImageStyle;
  textStyle?: TextStyle;
}
