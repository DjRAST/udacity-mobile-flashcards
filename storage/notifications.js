import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'mobile_flashcards:notifications'

export function clearLocalNotifications () {

}

function createNotification () {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Remember Learning!',
      body: 'You haven`t started a quiz today. Make sure to learn regularly to achieve your goals.',
    },
    trigger: null,
  });
}

export async function initLocalNotification () {
  const hasNotificationPermission = await grantNotificationPermission()

  if (hasNotificationPermission) {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then((data) => {
        // data = JSON.parse(data)
        // if (data === null) {
        createNotification()
        // }
      })
  }
}

async function grantNotificationPermission () {
  if (!Constants.isDevice) {
    return false
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return false;
  }

  return true;
}