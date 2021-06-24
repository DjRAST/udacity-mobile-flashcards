import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import ViewStyles from '../styles/view';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { addNewCardToDeck } from '../storage/actions';

export const CREATE_QUESTION_VIEW_ID = 'CreateQuestion';

class CreateQuestionView extends Component {
  state = {
    questionText: '',
    answerText: '',
  }

  onQuestionChanged = (text) => {
    this.setState({
      questionText: text
    })
  }

  onAnswerChanged = (text) => {
    this.setState({
      answerText: text
    })
  }

  onSubmit = () => {
    const { dispatch, navigation, deckId } = this.props
    const { questionText, answerText } = this.state

    if (!questionText.length || !answerText.length) {
      alert('Please enter a question and an answer!')
    } else {
      dispatch(addNewCardToDeck(deckId, {
        question: questionText,
        answer: answerText,
      }))
      navigation.goBack()
      this.setState({
        questionText: '',
        answerText: '',
      })
    }
  }

  render () {
    const { deckId } = this.props
    const { questionText, answerText } = this.state

    return (
      <View style={ViewStyles.base}>
        <Text style={ViewStyles.viewHeadline}>Create card for deck "{deckId}"</Text>
        <Text>Question:</Text>
        <TextInput
          value={questionText}
          style={ViewStyles.textInput}
          onChangeText={this.onQuestionChanged} />
        <Text>Answer:</Text>
        <TextInput
          value={answerText}
          style={ViewStyles.textInput}
          onChangeText={this.onAnswerChanged} />
        <Button text='Add Card' color='cornflowerblue' onPress={this.onSubmit} />
      </View>
    )
  }
}

function mapStateToProps (state, { route }) {
  const { deckId } = route.params

  return {
    deckId,
  }
}

export default connect(mapStateToProps)(CreateQuestionView)