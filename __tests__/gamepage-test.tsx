import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import GamePage from '../src/pages/GamePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

test('guess buttons are rendered', () => {
  const Stack = createNativeStackNavigator();
  const categoryName = 'animals';

  const component = render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GamePage"
          component={GamePage}
          initialParams={{categoryName}}
        />
      </Stack.Navigator>
    </NavigationContainer>,
  );
  const guessButtons = component.getAllByTestId('guess-button');

  expect(guessButtons).toBeDefined();
});
