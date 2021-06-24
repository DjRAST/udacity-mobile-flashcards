import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ViewStyles from '../styles/view';
import { connect } from 'react-redux';
import { addNewDeck } from '../storage/actions';
import { DECKS_LIST_VIEW_ID } from './DecksList';

export const CREATE_DECK_VIEW_ID = 'CreateDeck';

class CreateDeckView extends Component {
  state = {
    deckNameInput: '',
  }

  onTextChanged = (text) => this.setState({
    deckNameInput: text,
  })

  onSubmit = () => {
    const { dispatch, navigation } = this.props
    const { deckNameInput } = this.state
    dispatch(addNewDeck(deckNameInput))
    navigation.navigate(DECKS_LIST_VIEW_ID)
  }

  render () {
    const { deckNameInput } = this.state

    return (
      <View style={ViewStyles.base}>
        <Text style={ViewStyles.viewHeadline}>Create New Deck</Text>
        <Text>Enter the name of your new flashcard deck:</Text>
        <TextInput
          value={deckNameInput}
          style={ViewStyles.textInput}
          onChangeText={this.onTextChanged} />
        <Button title='Create' onPress={this.onSubmit} />
      </View>
    )
  }
}

export default connect()(CreateDeckView)