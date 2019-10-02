import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import GoalInput from './src/components/GoalInput';
import ListGoal from './src/components/ListGoal';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [goals, setGoals] = useState([]);
  function addGoal() {
    setGoals(goals => [...goals, userInput]);
    setUserInput('');
  }
  function deleteGoal(i) {
    let newGoals = [...goals];
    newGoals.splice(i, 1);
    setGoals(newGoals);
  }
  return (
    <View style={styles.container}>
      <GoalInput
        userInput={userInput}
        setUserInput={setUserInput}
        goals={goals}
        addGoal={addGoal}
      />
      {goals.map((goal, i) => {
        return (
          <ListGoal key={i} goal={goal} index={i} deleteGoal={deleteGoal} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
