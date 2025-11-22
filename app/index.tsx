
import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import ToDoForm from "../components/ToDoForm"; 

export default function Index() {
  // task list state
  const [tasks, setTasks] = useState<string[]>([]);

  // addTask function
  const addTask = (taskText: string) => {
    // not allow duplicate task
    if (tasks.includes(taskText)) {
      return;
    }

    // setTasks([...tasks, taskText]);
    setTasks((prev) => [...prev, taskText]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Part 1： addTask as prop send to ToDoForm */}
      <ToDoForm addTask={addTask} />

      {/* show list  */}
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.taskItem}>{item}</Text>}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f7",
  },
  listContainer: {
    marginTop: 16,
  },
  taskItem: {
    paddingVertical: 8,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 16,
  },
});
