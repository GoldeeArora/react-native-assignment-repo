import {View, Text} from 'react-native';
import React from 'react';
// import {useSelector} from 'react-redux';
// import {selectNotification} from '../../features/notificationsSlice';
import Notifications from '../../components/Notifications';
export default function NotificationScreen() {
  return (
    <View>
      <Notifications />
      {/* <Text>Hello World</Text> */}
    </View>
  );
}