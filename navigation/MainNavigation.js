import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import DeckView, { DECK_VIEW_ID } from '../views/Deck';
import CreateQuestionView, { CREATE_QUESTION_VIEW_ID } from '../views/CreateQuestion';
import QuizView, { QUIZ_VIEW_ID } from '../views/Quiz';

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigation} options={{ title: 'Mobile Flash Cards' }}/>
        <Stack.Screen name={DECK_VIEW_ID} component={DeckView} />
        <Stack.Screen name={CREATE_QUESTION_VIEW_ID} component={CreateQuestionView} options={{ title: 'New Card' }}/>
        <Stack.Screen name={QUIZ_VIEW_ID} component={QuizView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}