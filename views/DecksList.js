import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ViewStyles from '../styles/view';
import { useNavigation } from '@react-navigation/native';
import { DECK_VIEW_ID } from './Deck';

export const DECKS_LIST_VIEW_ID = 'DecksList';

const localStyles = StyleSheet.create({
  deckListEntry: {
    width: Dimensions.get('window').width,
    padding: 40,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'lavender',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

class DecksListView extends Component {
  onOpenDeck = (deckTitle) => {
    const { navigation } = this.props
    navigation.navigate(DECK_VIEW_ID, { deckId: deckTitle })
  }

  render () {
    const { decksModel } = this.props

    return (
      <View style={ViewStyles.base}>
        <FlatList
          data={decksModel}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <TouchableOpacity style={localStyles.deckListEntry} onPress={() => this.onOpenDeck(item.title)} key={item.title}>
              <Text style={{fontSize: 20}}>{item.title}</Text>
              <Text style={{alignSelf: 'flex-end'}}>{item.questions} Questions</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

function mapStateToProps (storeData) {
  const decksModel = []

  for (const [key, value] of Object.entries(storeData)) {
    decksModel.push({
      title: key,
      questions: value.questions.length,
    })
  }

  return {
    decksModel
  }
}

export default connect(mapStateToProps)(DecksListView)