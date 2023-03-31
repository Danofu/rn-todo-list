import {Text, View, StyleSheet} from "react-native";

const GoalItem = (props) => (
  <View style={styles.goalItem}>
    <Text style={styles.goalItemText}>{props.text}</Text>
  </View>
)

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5E0ACC",
    borderRadius: 6,
    marginVertical: 8,
    padding: 8,
  },
  goalItemText: {
    color: 'white',
  },
});

export default GoalItem;
