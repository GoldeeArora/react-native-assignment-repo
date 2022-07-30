import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectNotifications} from '../features/notificationsSlice';
export default function Notifications() {
  const notifications = useSelector(selectNotifications);
  return (
    <ScrollView>
      {notifications &&
        notifications?.map((notifications, index) => (
          <View key={index} style={styles.notificationContainer}>
            <Text> This is a random message number {index + 1}</Text>
          </View>
        ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  notificationsContainer: {
    marginTop: 15,
  },
  notificationContainer: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
