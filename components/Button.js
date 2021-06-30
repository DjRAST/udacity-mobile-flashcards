import React from 'react';
import ViewStyles from '../styles/view';
import { Text, TouchableOpacity } from 'react-native';

export default function ({text, color, onPress, style}) {
  return (
    <TouchableOpacity style={[ViewStyles.button, {backgroundColor: color}, style]} onPress={onPress}>
      <Text style={ViewStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}