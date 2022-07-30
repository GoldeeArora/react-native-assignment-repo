import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addToNotifications: state => {
      state.notifications = [
        ...state.notifications,
        `Hello This is a random text number ${state.notifications.length + 1}`,
      ];
    },
  },
});

export const {addToNotifications} = notificationsSlice.actions;
export const selectNotifications = state => state.notifications.notifications;

export default notificationsSlice.reducer;
