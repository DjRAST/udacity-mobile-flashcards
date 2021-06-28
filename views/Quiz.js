import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import Button from '../components/Button'

import ViewStyles from '../styles/view';

export const QUIZ_VIEW_ID = 'Quiz';

class QuizView extends Component {
  state = {
    cardIndex: 0,
    correctAnswers: 0,
  }

  onCorrectAnswer = () => {
    this.setState({
      cardIndex: this.state.cardIndex + 1,
      correctAnswers: this.state.correctAnswers + 1,
    })
  }

  onFailedAnswer = () => {
    this.setState({
      cardIndex: this.state.cardIndex + 1,
    })
  }

  render () {
    const { questions } = this.props
    const { cardIndex, correctAnswers } = this.state

    if (cardIndex >= questions.length) {
      return (
        <View>
          <Text>You got {correctAnswers}/{questions.length} questions correct!</Text>
        </View>
      )
    } else {
      const currentQuestion = questions[cardIndex].question

      return (
        <View style={ViewStyles.base}>
          <Text style={{marginTop: 12, marginBottom: 12, fontSize: 24}}>{cardIndex + 1}/{questions.length}</Text>
          <QuestionCard
            questionText={currentQuestion.question}
            answerText={currentQuestion.answer}
          />
          <Button style={{marginTop: 24}} text='I got it correct' color='green' onPress={this.onCorrectAnswer} />
          <Text>or</Text>
          <Button text='I failed this question' color='crimson' onPress={this.onFailedAnswer} />
        </View>
      )
    }
  }
}

function mapStateToProps (state, { route }) {
  const { deckId } = route.params
  const questions = state[deckId].questions

  console.log('deck', state[deckId])

  return {
    deckId,
    questions,
  }
}

export default connect(mapStateToProps)(QuizView)