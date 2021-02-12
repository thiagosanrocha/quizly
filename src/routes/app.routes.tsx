import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';
import Categories from '../screens/Categories';
import ChooseDifficulty from '../screens/ChooseDifficulty';
import Questions from '../screens/Questions';
import Congratulations from '../screens/Congratulations';
import TryAgain from '../screens/TryAgain';

const App = createStackNavigator();

const ScreenWithoutHeader = {
  headerLeft: () => null,
  headerStyle: {
    height: 72,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
};

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

    <App.Screen
      name="Categories"
      component={Categories}
      options={ScreenWithoutHeader}
    />
    <App.Screen name="ChooseDifficulty" component={ChooseDifficulty} />
    <App.Screen name="Questions" component={Questions} />

    <App.Screen
      name="Congratulations"
      component={Congratulations}
      options={ScreenWithoutHeader}
    />

    <App.Screen
      name="TryAgain"
      component={TryAgain}
      options={ScreenWithoutHeader}
    />
  </App.Navigator>
);

export default AppRoutes;
