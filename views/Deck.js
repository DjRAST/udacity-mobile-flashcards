import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ViewStyles from '../styles/view';

export const DECK_VIEW_ID = 'Deck';

class DeckView extends Component {
  render () {
    return (
      <View style={ViewStyles.base}>
        <Text>DECK</Text>
      </View>
    )
  }
}

export default DeckView