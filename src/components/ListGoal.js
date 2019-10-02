import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListGoal = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={props.deleteGoal.bind(this, props.index)}>
      <View>
        <Text style={styles.text}>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    fontSize: 20,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default ListGoal;
