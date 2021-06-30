import { ADD_NEW_CARD_TO_DECK, ADD_NEW_DECK, SET_INITAL_DATA } from './actions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_INITAL_DATA:
      return action.data;
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.deckName]: {
          title: action.deckName,
          questions: [],
        },
      };
    case ADD_NEW_CARD_TO_DECK:
      const {deckId, question, answer} = action;
      const updatedDeck = {
        ...state[deckId],
        questions: [
          ...state[deckId].questions,
          {question: question, answer: answer},
        ],
      };
      return {
        ...state,
        [deckId]: updatedDeck,
      };
    default:
      return state;
  }
}