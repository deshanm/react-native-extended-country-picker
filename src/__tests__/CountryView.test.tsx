import React from 'react';
import { render } from '@testing-library/react-native';
import { CountryView } from '..';

test('US country code should render United State', () => {
  const { queryByText, queryByTestId } = render(
    <CountryView countryCode="US" />
  );
  const rendered = queryByText('United States');
  const renderedImg = queryByTestId('rncpCountryViewImg');
  expect(rendered).not.toBeNull();
  expect(renderedImg).not.toBeNull();
});

test('OnlyFlag={true} should not render the text', () => {
  const { queryByText, queryByTestId } = render(
    <CountryView flagOnly={true} countryCode="US" />
  );
  const renderedUnitedState = queryByText('United States');
  const renderedImg = queryByTestId('rncpCountryViewImg');
  const renderedText = queryByTestId('rncpCountryViewText');
  expect(renderedImg).not.toBeNull();
  expect(renderedUnitedState).toBeNull();
  expect(renderedText).toBeNull();
});

test('Invalid country code should not render. it should render null', () => {
  const { toJSON } = render(<CountryView countryCode="IKILEKSKDKFKSK" />);
  const rendered = toJSON();
  expect(rendered).toBeNull();
});

describe('CountryView Function Testing', () => {
  it.todo('User should not be able to press when touchDisabled={true}');
  it.todo('onPress press should callback the country information');
});

describe('CountryView Style Testing', () => {
  test.todo('User should not be able to press when touchDisabled={true}');
  test.todo('Changing text style should change the country text');
  test.todo('onPress press should callback the country information');
  test.todo('containerStyle should change the container style');
  test.todo('flagStyle should change the country flag style');
});
