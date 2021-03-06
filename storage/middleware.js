import { STORAGE_ID } from './common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const synchronizeStorage = (store) => (next) => (action) => {
  const returnValue = next(action);
  // synchronize phone storage after every redux action
  AsyncStorage.setItem(STORAGE_ID, JSON.stringify(store.getState())).then(() => returnValue);
};

export default applyMiddleware(
  thunk,
  synchronizeStorage,
);
