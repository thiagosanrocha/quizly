import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />

    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  </>
);

export default App;
