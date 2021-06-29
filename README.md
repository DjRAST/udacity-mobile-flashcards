# Mobile Flashcards Project

This is the third and final assignment of Udacity's [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

_The App was designed primarily for iOS and tested on an iPhone Xs_

## feature description

This project implements an index card app which can be used for studying.

The user can create card decks, each containing an arbitrary number of index cards. Each card has a question on the front and the answer on the back.

After creating cards for a deck, the user can test himself by starting a quiz. For each question, the user can record if he remembered the answer or not.

Every day the user receives a notification if he didn't study on that day.

## technology
This app was realized, using:

* [React Native](https://reactnative.dev/)
* [Create React Native App](create-react-native-app)
* [Async Storage](@react-native-async-storage/async-storage)
* [React Navigation](https://reactnavigation.org/)
* [react-native-card-flip](https://github.com/lhandel/react-native-card-flip)

## start the project

To get started:

* install all project dependencies with `npm install`
* start the development server with `expo start`
* scan the QR code with your mobile phone, with the [Expo Go App](https://apps.apple.com/de/app/expo-client/id982107779) installed 