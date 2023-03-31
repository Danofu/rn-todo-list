import PropTypes from 'prop-types';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '30%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  inputContainer: {
    alignItems: 'center',
    // borderBottomColor: '#CCC',
    // borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 8,
    width: '100%',
  },
});

function GoalInput({ modalIsVisible, onAdd, onCancel }) {
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
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={onCancel} title="Cancel" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

GoalInput.propTypes = {
  modalIsVisible: PropTypes.bool,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

GoalInput.defaultProps = {
  modalIsVisible: false,
  onAdd: () => {},
  onCancel: () => {},
};

export default GoalInput;
