import { SET_INITAL_DATA, ADD_NEW_DECK } from './actions';

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SET_INITAL_DATA:
      return action.data;
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.deckName]: {}
      }
    default:
      return state;
  }
}