import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import  { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ViewStyles from '../styles/view';
import Button from '../components/Button';
import { CREATE_QUESTION_VIEW_ID } from './CreateQuestion';

export const DECK_VIEW_ID = 'Deck';

class DeckView extends Component {
  onCreateCard = () => {
    const { deckId, navigation } = this.props
    navigation.navigate(CREATE_QUESTION_VIEW_ID, { deckId })
  }

  onStartQuiz = () => {
    alert('Start Quiz')
  }

  render () {
    const { deckId, noCards } = this.props

    return (
      <View style={ViewStyles.base}>
        <Text style={ViewStyles.viewHeadline}>{deckId} <MaterialCommunityIcons name='cards-outline' size={32} color='black' /></Text>
        <Text style={{marginBottom: 36, fontSize: 18}}>{noCards} Cards</Text>
        <Button text='Add Card' color='green' onPress={this.onCreateCard} style={{marginBottom: 24}} />
        <Button text='Start Quiz' color='coral' onPress={this.onStartQuiz} />
      </View>
    )
  }
}

function mapStateToProps (state, { route }) {
  const { deckId } = route.params
  const deck = state[deckId]

  return {
    deckId,
    noCards: deck.questions.length
  }
}

export default connect(mapStateToProps)(DeckView)