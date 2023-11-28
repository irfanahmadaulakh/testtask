import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import Home from '../Screens/Home';
import ProductsDetails from '../Screens/productsDetails';
const Stack = createStackNavigator();
const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
  </Navigator>
);

export const AppNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
    </Stack.Navigator>
  );
};
