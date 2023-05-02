/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src';
import {render, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import HomePage from '../src/pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';

jest.useFakeTimers();

test('rendering', () => {
  const {getAllByRole} = render(
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>,
  );

  const pressable = getAllByRole('button');

  expect(pressable).toBeDefined();
});
