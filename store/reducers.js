import { SET_INITAL_DATA, SET_VALUE } from './actions';

export default function reducer (state = 0, action) {
  switch (action.type) {
    case SET_INITAL_DATA:
      return action.value;
    case SET_VALUE:
      return action.value;
    default:
      return state;
  }
}