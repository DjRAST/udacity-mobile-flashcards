export const SET_INITAL_DATA = 'SET_INITAL_DATA'
export const SET_VALUE = 'SET_VALUE'

export const setInitialData = (value) => ({
  type: SET_INITAL_DATA,
  value,
});

export const setValue = (value) => ({
  type: SET_VALUE,
  value
});