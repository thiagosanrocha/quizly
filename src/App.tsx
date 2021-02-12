import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import 'react-native-get-random-values';

import store from './store';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />

    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  </>
);

export default App;
