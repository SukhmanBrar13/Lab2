import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { getTasks, addTask, completeTask, deleteTask, populateTasks } from "../lib/supabase_crud";
type Task = {
    id: string;
    task_name: string;
    completed: boolean;
};

export default function Lab6() {
const router = useRouter();
const [tasks, setTasks] = useState<Task[]>([]);
const [newTask, setNewTask] = useState("");

useEffect(() => {
    fetchTasks();
}, []);

const fetchTasks = async () => {
    const data = await getTasks();
    console.log("Fetched Tasks:", data);
    setTasks(data);
};


const handleAddTask = async () => {
    if (newTask.trim() === "") return;
    await addTask(newTask);
    setNewTask("");
    fetchTasks();
};

const handleCompleteTask = async (taskId: string) => {
    await completeTask(taskId);
    fetchTasks();
};

const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId);
    fetchTasks();
};

return (
    <View style={styles.container}>
    <Text style={styles.header}>Lab 6: Task Manager</Text>

    <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Enter new task..."
        value={newTask}
        onChangeText={setNewTask}
        />
        <Button title="Add Task" onPress={handleAddTask} />
    </View>

    <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View style={styles.taskRow}>
            <Text style={[styles.taskText, item.completed && styles.completedTask]}>
            {item.task_name}
            </Text>
            <Button title="✔️" onPress={() => handleCompleteTask(item.id)} />
            <Button title="🗑️" onPress={() => handleDeleteTask(item.id)} />
        </View>
        )}
    />

    <Button title="Load Sample Tasks" onPress={populateTasks} />

    <Button title="Go Back Home" onPress={() => router.push("/")} />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
},
header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
},
inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
},
input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
},
taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
},
taskText: {
    flex: 1,
    fontSize: 16,
},
completedTask: {
    textDecorationLine: "line-through",
    color: "gray",
},
});
