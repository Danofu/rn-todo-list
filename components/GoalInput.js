import PropTypes from 'prop-types';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  textInput: {
    borderColor: '#CCC',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    width: '70%',
  },
});

function GoalInput({ modalIsVisible, onAdd }) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (textValue) => setEnteredGoal(textValue);

  const addGoalHandler = () => {
    onAdd(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal animationType="slide" visible={modalIsVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Your course goal..."
          style={styles.textInput}
          value={enteredGoal}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
    </Modal>
  );
}

GoalInput.propTypes = {
  modalIsVisible: PropTypes.bool,
  onAdd: PropTypes.func,
};

GoalInput.defaultProps = {
  modalIsVisible: false,
  onAdd: () => {},
};

export default GoalInput;
