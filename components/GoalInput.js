import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };    

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Basketball Player" 
                    style={styles.input} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    <Button title="ADD" onPress={addGoalHandler}/>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1, justifyContent: "center", alignItems: "center"
      },
    
      input: {
        width: "60%", borderBottomColor: 'black', borderBottomWidth: 1, padding:5
      },

      buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%"
      }
});

export default GoalInput;