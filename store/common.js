import AsyncStorage from '@react-native-async-storage/async-storage'

import { setInitialData, setValue } from './actions'

const STORAGE_ID_PREFIX = 'UDACITY:MOBILEFLASHCARDS:';

const TEST_STORAGE_ID = STORAGE_ID_PREFIX + 'TEST';

export const initAppData = () => {
  return (dispatch) => {
    AsyncStorage.getItem(TEST_STORAGE_ID)
      .then((storageValue) => {
        console.log(storageValue)
        const value = Number.parseInt(storageValue) || 0
        dispatch(setInitialData(value))
      })
  }
};

export const increment = () => {
  return (dispatch, getState) => {
    const newValue = getState() + 1
    AsyncStorage.setItem(TEST_STORAGE_ID, JSON.stringify(newValue))
      .then(() => dispatch(setValue(newValue)))
  }
};