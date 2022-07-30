import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {addToNotifications} from '../../features/notificationsSlice';
import {useDispatch} from 'react-redux';
export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(addToNotifications())}>
        <Text style={styles.buttonText}>Add Notifications</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'grey',
    backgroundColor: '#ADD8E6',
  },
});
