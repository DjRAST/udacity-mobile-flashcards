import AsyncStorage from '@react-native-async-storage/async-storage';
import { setInitialData } from './actions';

export const STORAGE_ID = 'UDACITY:MOBILEFLASHCARDS';

export const initAppData = () => {
  return (dispatch) => {
    AsyncStorage.getItem(STORAGE_ID)
      .then((storageData) => {
        const storeData = JSON.parse(storageData) || {};
        dispatch(setInitialData(storeData));
      });
  };
};
