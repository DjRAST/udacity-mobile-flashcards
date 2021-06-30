import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  base: {
    flex: 1,
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
  },
  button: {
    width: 250,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});