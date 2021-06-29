# Mobile Flashcards Project

This is the third and final assignment of Udacity's [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

_The App was designed primarily for iOS and tested on an iPhone Xs with Expo Go App_

## Features

This project implements an index card app which can be used for studying.

The user can create card decks, each containing an arbitrary number of index cards. Each card has a question on the front and the answer on the back.

After creating cards for a deck, the user can test himself by starting a quiz. For each question, the user can record if he remembered the answer or not.

Every day the user receives a notification if he didn't study on that day.

## Technology
Prerequisites:

* Node.js 14.17.1
* expo-cli (`npm install -g expo-cli`)

This app was realized, using:

* [React Native](https://reactnative.dev/)
* [Create React Native App](https://github.com/expo/create-react-native-app)
* [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)
* [React Navigation](https://reactnavigation.org/)
* [React Native Card Flip](https://github.com/lhandel/react-native-card-flip)
* [Expo Notifications](https://docs.expo.io/versions/latest/sdk/notifications/)
* [React Redux](https://react-redux.js.org/)

## start the project

To get started:

* install all project dependencies with `npm install`
* start the expo development server with `npm start`
* scan the QR code with your mobile phone, with the [Expo Go App](https://apps.apple.com/de/app/expo-client/id982107779) installed 