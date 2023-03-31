import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (textValue) => setEnteredGoal(textValue);

  const addGoalHandler = () => {
    props.onAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder="Your course goal..."
        style={styles.textInput}
        value={enteredGoal}
      />
      <Button onPress={addGoalHandler} title="Add Goal"/>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;
