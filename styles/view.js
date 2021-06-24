import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  base: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  viewHeadline: {
    paddingTop: 24,
    paddingBottom: 48,
    fontSize: 24,
  },
  textInput: {
    width: 300,
    padding: 12,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'lightgrey',
  }
})