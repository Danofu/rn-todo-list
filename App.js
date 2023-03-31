import {Button, StyleSheet, Text, TextInput, View, FlatList} from "react-native";
import {useState} from "react";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (textValue) => {
    setEnteredGoalText(textValue);
  };

  const addGoalHandler = () => {
    setGoals((prevGoals) => [{id: Math.random().toString(), text: enteredGoalText}, ...prevGoals]);
  };

  return (<View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder="Your course goal..."
        style={styles.textInput}
        value={enteredGoalText}
      />
      <Button onPress={addGoalHandler} title="Add Goal"/>
    </View>
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) =>
          <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{itemData.item.text}</Text>
          </View>
        }
        style={{paddingEnd: 10}}
      />
    </View>
  </View>);
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, paddingHorizontal: 15, paddingTop: 50,
  },
  goalItem: {
    backgroundColor: "#5E0ACC", borderRadius: 6, marginVertical: 8, padding: 8,
  },
  goalItemText: {
    color: 'white',
  },
  goalsContainer: {
    flex: 5,
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
    borderColor: "#CCC", borderWidth: 1, marginRight: 8, padding: 8, width: "70%",
  },
});

export default App;
