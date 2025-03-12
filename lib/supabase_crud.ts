import supabase from "./supabase";

const TABLE_NAME = "sampledatabase";

export async function getTasks() {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");
    if (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
    return data;
}

export async function addTask(taskName: string) {
    const { data, error } = await supabase.from(TABLE_NAME).insert([
        { task_name: taskName, completed: false }
    ]);
    if (error) {
        console.error("Error adding task:", error);
        throw error;
    }
    return data;
}

export async function deleteTask(taskId: string) {
    const { data, error } = await supabase.from(TABLE_NAME).delete().eq("id", taskId);
    if (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
    return data;
}

export async function completeTask(taskId: string) {
    const { data, error } = await supabase.from(TABLE_NAME).update({ completed: true }).eq("id", taskId);
    if (error) {
        console.error("Error completing task:", error);
        throw error;
    }
    return data;
}

import tasksData from "../tasks.json";

export async function populateTasks() {
    for (const task of tasksData.tasks) {
        await addTask(task);
    }
}
