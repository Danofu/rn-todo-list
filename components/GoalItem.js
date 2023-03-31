import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5E0ACC',
    borderRadius: 6,
    marginVertical: 8,
  },
  goalItemText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

function GoalItem({ id, onDelete, text }) {
  const deleteGoalHandler = () => onDelete(id);

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

GoalItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  text: PropTypes.string,
};

GoalItem.defaultProps = {
  onDelete: () => {},
  text: '',
};

export default GoalItem;
