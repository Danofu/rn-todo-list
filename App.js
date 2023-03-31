import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  goalsContainer: {
    flex: 5,
  },
});

function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => setModalIsVisible(true);

  const addGoalHandler = (goalText) =>
    setGoals((prevGoals) => [{ id: Math.random().toString(), text: goalText }, ...prevGoals]);

  const deleteGoalHandler = (goalId) => setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));

  return (
    <View style={styles.appContainer}>
      <Button color="#5E0ACC" onPress={startAddGoalHandler} title="Add New Goal" />
      <GoalInput modalIsVisible={modalIsVisible} onAdd={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GoalItem id={item.id} onDelete={deleteGoalHandler} text={item.text} />}
          style={{ paddingEnd: 10 }}
        />
      </View>
    </View>
  );
}

export default App;
