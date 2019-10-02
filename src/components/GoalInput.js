import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New Goal"
        value={props.userInput}
        onChangeText={input => props.setUserInput(input)}
      />
      <Button title="ADD" onPress={props.addGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  input: {
    height: 40,
    width: '85%',
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    height: 40,
    fontSize: 30,
    borderRadius: 50,
  },
});

export default GoalInput;
