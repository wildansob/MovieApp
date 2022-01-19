import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { COLOR } from './src/config/color';
import Router from './src/router';
import {Provider} from 'react-redux'
import { persistedStore, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.black} />
      <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
