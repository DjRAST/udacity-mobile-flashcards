import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ViewStyles from '../styles/view';

export const QUIZ_VIEW_ID = 'Quiz';

class QuizView extends Component {
  render () {
    return (
      <View style={ViewStyles.base}>
        <Text>QUIZ</Text>
      </View>
    )
  }
}

export default QuizView