import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

type Props = {};

const AppRoot: React.FC<Props> = ({}) => {
  return (
    <NavigationContainer>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is App Root</Text>
      </View>
    </NavigationContainer>
  );
};

export default AppRoot;
