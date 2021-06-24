import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import DecksListView, { DECKS_LIST_VIEW_ID } from './views/DecksList';
import CreateDeckView, { CREATE_DECK_VIEW_ID } from './views/CreateDeck';
import reducer from './store/reducers'
import middleware from './store/middleware';

const store = createStore(reducer, middleware);
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch (route.name) {
                case DECKS_LIST_VIEW_ID:
                  return <FontAwesome name="th-list" size={size} color={color} />
                case CREATE_DECK_VIEW_ID:
                  return <AntDesign name="star" size={size} color={color} />
                default:
                  return null;
              }
            },
          })}
        >
          <Tab.Screen name={DECKS_LIST_VIEW_ID} component={DecksListView} />
          <Tab.Screen name={CREATE_DECK_VIEW_ID} component={CreateDeckView} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
