import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    width: 320,
    height: 470,
    padding: 12,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: 'oldlace',
  },
  card2: {
    backgroundColor: 'mintcream',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'System',
    color: '#444444',
    backgroundColor: 'transparent',
  },
});

class QuestionCard extends Component {
  state = {
    isFlipped: false,
  };

  render() {
    const {questionText, answerText} = this.props;

    return (
      <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} key={questionText}>
        <TouchableOpacity style={[styles.card, styles.card1]} onPress={() => this.card.flip()}>
          <Text style={styles.cardText}>{questionText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.card2]} onPress={() => this.card.flip()}>
          <Text style={styles.cardText}>{answerText}</Text>
        </TouchableOpacity>
      </CardFlip>
    );
  }
}

export default QuestionCard;