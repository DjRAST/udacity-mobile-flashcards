export const SET_INITAL_DATA = 'SET_INITAL_DATA'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'

export const setInitialData = (data) => ({
  type: SET_INITAL_DATA,
  data,
});

export const addNewDeck = (deckName) => ({
  type: ADD_NEW_DECK,
  deckName,
});
