import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import ViewStyles from '../styles/view';
import { connect } from 'react-redux';
import { addNewDeck } from '../storage/actions';
import { DECKS_LIST_VIEW_ID } from './DecksList';
import Button from '../components/Button';

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

    if (deckNameInput.length < 3) {
      alert('Please enter at least three characters')
    } else {
      dispatch(addNewDeck(deckNameInput))
      navigation.navigate(DECKS_LIST_VIEW_ID)
      this.setState({deckNameInput: ''})
    }
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
        <Button text='Create' color='cornflowerblue' onPress={this.onSubmit} />
      </View>
    )
  }
}

export default connect()(CreateDeckView)