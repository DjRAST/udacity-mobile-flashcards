import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ViewStyles from '../styles/view';
import { connect } from 'react-redux';
import { increment } from '../store/common';

export const CREATE_DECK_VIEW_ID = 'CreateDeck';

class CreateDeckView extends Component {
  render () {
    const { dispatch } = this.props

    return (
      <View style={ViewStyles.base}>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>CREATE DECK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(CreateDeckView)