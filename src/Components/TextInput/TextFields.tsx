import {View, TextInput, Text} from 'react-native';
import React from 'react';
import styles from './style';
const TextFields: React.FC<any> = ({onChangeText, backgroundColor}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Placeholder Text"
        style={[styles.inputView, {backgroundColor: backgroundColor}]}
        placeholderTextColor={'#000000'}
        keyboardType="default"
      />
    </View>
  );
};

export default TextFields;
