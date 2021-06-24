import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  { connect } from 'react-redux';
import ViewStyles from '../styles/view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const DECK_VIEW_ID = 'Deck';

class DeckView extends Component {
  render () {
    const { deckId, noCards } = this.props

    return (
      <View style={ViewStyles.base}>
        <Text style={ViewStyles.viewHeadline}>{deckId} <MaterialCommunityIcons name='cards-outline' size={32} color='black' /></Text>
        <Text>{noCards} Questions</Text>
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