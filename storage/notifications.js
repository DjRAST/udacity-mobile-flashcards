import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const STORAGE_NOTIFICATION_ID = 'mobile_flashcards:notificationId'

export async function resetLocalNotification () {
  // cancel old notification if any
  AsyncStorage.getItem(STORAGE_NOTIFICATION_ID)
    .then(async (data) => {
      const notificationId = JSON.parse(data)
      if (notificationId !== null) {
        await Notifications.cancelScheduledNotificationAsync(notificationId);
        await AsyncStorage.setItem(STORAGE_NOTIFICATION_ID, JSON.stringify(null))
        // init new notification in 24 hours
        await initLocalNotification();
      }
    })
}

async function createNotification () {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Remember Learning!',
      body: 'You haven`t started a quiz today. Make sure to learn regularly to achieve your goals.',
    },
    trigger: {
      repeats: true,
      seconds: 60 * 60 * 24, // notification after 24 hours
    },
  });
  await AsyncStorage.setItem(STORAGE_NOTIFICATION_ID, JSON.stringify(notificationId))
}

export async function initLocalNotification () {
  const hasNotificationPermission = await grantNotificationPermission()

  if (hasNotificationPermission) {
    AsyncStorage.getItem(STORAGE_NOTIFICATION_ID)
      .then(async (data) => {
        data = JSON.parse(data)
        if (data === null) {
          await createNotification()
        }
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