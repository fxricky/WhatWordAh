import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';
import {PAGE_NAME} from './pages/pageName';
import GamePage from './pages/GamePage';
import WinningPage from './pages/WinningPage';
import LeaderboardPage from './pages/LeaderboardPage';

type Props = {};

const Stack = createNativeStackNavigator();

const AppRoot: React.FC<Props> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={PAGE_NAME.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={PAGE_NAME.HOME_PAGE} component={HomePage} />
        <Stack.Screen name={PAGE_NAME.GAME_PAGE} component={GamePage} />
        <Stack.Screen name={PAGE_NAME.WINNING_PAGE} component={WinningPage} />
        <Stack.Screen
          name={PAGE_NAME.LEADERBOARD_PAGE}
          component={LeaderboardPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoot;
