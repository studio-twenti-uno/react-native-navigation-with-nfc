/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const homeScreenStyles: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const HomeScreen = (): JSX.Element => {
  return (
    <View style={homeScreenStyles}>
      <Text>NFC + Navigation Sample App</Text>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
