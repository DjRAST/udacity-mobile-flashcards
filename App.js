import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './storage/reducers';
import middleware from './storage/middleware';
import { initAppData } from './storage/common';
import { initLocalNotification } from './storage/notifications';
import MainNavigation from './navigation/MainNavigation';

const store = createStore(reducer, middleware);

export default function App() {
  useEffect(() => {
    store.dispatch(initAppData());
    initLocalNotification();
  }, []);

  return (
    <Provider store={store}>
      <MainNavigation/>
    </Provider>
  );
}
