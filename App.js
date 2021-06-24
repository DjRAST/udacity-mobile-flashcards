import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './storage/reducers'
import middleware from './storage/middleware';
import { initAppData } from './storage/common';
import MainNavigation from './navigation/MainNavigation';

const store = createStore(reducer, middleware);

export default function App () {
  useEffect(() => {
    store.dispatch(initAppData())
  }, [])

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
