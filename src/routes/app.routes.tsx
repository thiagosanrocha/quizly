import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';

const App = createStackNavigator();

const AppRoutes = () => (
  <NavigationContainer>
    <App.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        title: '',
        headerTransparent: true,
        headerTintColor: '#FFF',
        cardStyle: { backgroundColor: '#6066D0' },
      }}
    >
      <App.Screen name="Onboarding" component={Onboarding} />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
