import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ViewStyles from '../styles/view';
import { connect } from 'react-redux';
import { initAppData } from '../store/common';

export const DECKS_LIST_VIEW_ID = 'DecksList';

class DecksListView extends Component {
  componentDidMount() {
    this.props.dispatch(initAppData())
  }

  render () {
    return (
      <View style={ViewStyles.base}>
        <Text>DECKS LIST</Text>
        <Text>{this.props.stateValue}</Text>
      </View>
    )
  }
}

function mapStateToProps (stateValue) {
  return {
    stateValue
  }
}

export default connect(mapStateToProps)(DecksListView)