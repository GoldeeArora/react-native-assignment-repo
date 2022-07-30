import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Importing Screens
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import AxiosScreen from './screens/AxiosScreen';
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Axios" component={AxiosScreen} />
    </Tab.Navigator>
  );
}
