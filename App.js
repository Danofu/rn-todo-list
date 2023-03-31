import {StyleSheet, View, FlatList} from "react-native";
import {useState} from "react";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalText) => {
    setGoals((prevGoals) => [{id: Math.random().toString(), text: goalText}, ...prevGoals]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAdd={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <GoalItem text={itemData.item.text}/>}
          style={{paddingEnd: 10}}
        />
      </View>
    </View>
  );
};

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

export default App;
