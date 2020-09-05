import type { CountryType } from './types';

import countries from './countries';

export function getCountryByCode(countryCode: string): CountryType | null {
  let found: CountryType | null = null;

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (country.code === countryCode) {
      found = country;
      break;
    }
  }
  return found;
}

export function filterCountriesByQuery(query: string): CountryType[] {
  const filteredCountries = countries.filter((country) => {
    let countryLowercase = country.name.toLowerCase();
    let searchTermLowercase = query.toLowerCase();
    return countryLowercase.indexOf(searchTermLowercase) > -1;
  });
  return filteredCountries;
}
