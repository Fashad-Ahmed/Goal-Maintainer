import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredText, setEnteredTexT] = useState("");

  const inputHandeler = (enteredText) => {
    setEnteredTexT(enteredText);
  };

  console.log(props);

  const addGoalHandeler = () => {
    props.onAddGoal();
    // setEnteredTexT("");
  };

  const cancelGoalAdditionHandler = () => {
    props.onCancel();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.courseGoal}
          onChangeText={inputHandeler}
          value={enteredText}
        />

        {console.log(inputHandeler)}
        
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandeler} />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              onPress={cancelGoalAdditionHandler}
              color="red"
            />
          </View>
          {/* props.onAddGoal.bind(this, enteredText) */}
          {/* // now on delete -> not onPress */}
        </View>
      </View>
    </Modal>
  );
};

/// spread and new option
const styles = StyleSheet.create({
  courseGoal: {
    borderColor: "#1111",
    borderWidth: 1,
    padding: 1,
    width: "80%",
    marginBottom: 10,
  },

  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    width: "60%",
  },

  button: {
    width: "35%",
  },
});
export default GoalInput;
