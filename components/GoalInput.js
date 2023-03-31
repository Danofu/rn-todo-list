import PropTypes from 'prop-types';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';
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
  goalImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#311B6B',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    backgroundColor: '#E4D0FF',
    borderColor: '#E4D0FF',
    borderRadius: 6,
    borderWidth: 1,
    color: '#120438',
    padding: 16,
    width: '100%',
  },
});

const goalImageImport = require('../assets/images/goal.png');

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
        <Image source={goalImageImport} style={styles.goalImage} />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Your course goal..."
          style={styles.textInput}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button color="#F31282" onPress={onCancel} title="Cancel" />
          </View>
          <View style={styles.buttonContainer}>
            <Button color="#B180F0" onPress={addGoalHandler} title="Add Goal" />
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
