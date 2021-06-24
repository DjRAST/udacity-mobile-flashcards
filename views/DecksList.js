import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ViewStyles from '../styles/view';
import { connect } from 'react-redux';
import { initAppData } from '../storage/common';

export const DECKS_LIST_VIEW_ID = 'DecksList';

class DecksListView extends Component {
  render () {
    return (
      <View style={ViewStyles.base}>
        <Text>DECKS LIST</Text>
        <Text>{JSON.stringify(this.props.storeData)}</Text>
      </View>
    )
  }
}

function mapStateToProps (storeData) {
  return {
    storeData
  }
}

export default connect(mapStateToProps)(DecksListView)