import { getCountryByCode, filterCountriesByQuery } from '../util';

describe('getCountryByCode(countryCode)', () => {
  it('Invalid country code should give null', () => {
    expect(getCountryByCode('InvalidCountryCOde')).toBeNull();
  });

  it('US country code should give US CountryType ', () => {
    expect(getCountryByCode('US')).toMatchObject({
      callingCode: '+1',
      code: 'US',
      img: { testUri: '../../../src/assets/flags/US.png' },
      name: 'United States',
    });
  });
});

describe('filterCountriesByQuery(query)', () => {
  it('none searchable country picker should give empty array', () => {
    expect(filterCountriesByQuery('IkIKDOSK123123')).toHaveLength(0);
  });

  it('Search "jap" should give only Japan', () => {
    const result = filterCountriesByQuery('jap');
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      callingCode: '+81',
      code: 'JP',
      img: { testUri: '../../../src/assets/flags/JP.png' },
      name: 'Japan',
    });
  });

  it('Searching "am" should give a list with correct data', () => {
    const result = filterCountriesByQuery('am');
    result.forEach((item) => {
      expect(item).toHaveProperty('callingCode');
      expect(item).toHaveProperty('code');
      expect(item).toHaveProperty('name');
    });
  });
});
