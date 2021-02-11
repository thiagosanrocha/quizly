import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';
import Categories from '../screens/Categories';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    initialRouteName="Onboarding"
    screenOptions={{
      title: '',
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: '#FFF',
      headerLeftContainerStyle: { paddingLeft: 6, paddingTop: 6 },
      cardStyle: { backgroundColor: '#6066D0' },
    }}
  >
    <App.Screen
      options={{ cardStyle: { backgroundColor: '#FFF' } }}
      name="Onboarding"
      component={Onboarding}
    />
    <App.Screen name="Categories" component={Categories} />
  </App.Navigator>
);

export default AppRoutes;
