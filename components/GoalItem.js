import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5E0ACC',
    borderRadius: 6,
    marginVertical: 8,
    padding: 8,
  },
  goalItemText: {
    color: 'white',
  },
});

function GoalItem({ text }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{text}</Text>
    </View>
  );
}

GoalItem.propTypes = {
  text: PropTypes.string,
};

GoalItem.defaultProps = {
  text: '',
};

export default GoalItem;
