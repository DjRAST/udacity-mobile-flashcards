import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ViewStyles from '../styles/view';

export const DECKS_LIST_VIEW_ID = 'DecksList';

const localStyles = StyleSheet.create({
  deckListEntry: {
    width: Dimensions.get('window').width,
    padding: 40,
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
  render () {
    const { decksModel } = this.props

    return (
      <View style={ViewStyles.base}>
        <Text style={ViewStyles.viewHeadline}>All Decks</Text>
        <FlatList
          data={decksModel}
          renderItem={({item}) => (
            <TouchableOpacity style={localStyles.deckListEntry}>
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