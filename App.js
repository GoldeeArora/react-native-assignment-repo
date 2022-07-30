import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs';
//Connecting redux with app using react-redux
import {Provider} from 'react-redux';
//adding redux store to the app
import {store} from './store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}
