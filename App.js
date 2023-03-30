import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (textValue) => {
    setEnteredGoalText(textValue);
  };

  const addGoalHandler = () => {
    setGoals((prevGoals) => [enteredGoalText, ...prevGoals]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Your course goal..."
          style={styles.textInput}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        {goals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
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
    flex: 6,
  },
  inputContainer: {
    alignItems: "center",
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  textInput: {
    borderColor: "#CCC",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    width: "70%",
  },
});

export default App;
