import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

// props type form partent accept the addTask function
type ToDoFormProps = {
  addTask: (taskText: string) => void;
};

export default function ToDoForm({ addTask }: ToDoFormProps) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    const trimmed = taskText.trim();
    if (!trimmed) return; // not allow empty task
    addTask(trimmed); 
    setTaskText(""); 
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText} // equal (text) => setTaskText(text)
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
});
