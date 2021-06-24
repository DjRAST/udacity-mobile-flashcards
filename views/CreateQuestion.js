import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ViewStyles from '../styles/view';

export const CREATE_QUESTION_VIEW_ID = 'CreateQuestion';

class CreateQuestionView extends Component {
  render () {
    return (
      <View style={ViewStyles.base}>
        <Text>CREATE QUESTION</Text>
      </View>
    )
  }
}

export default CreateQuestionView