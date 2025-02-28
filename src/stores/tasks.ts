import {ref} from "vue";
import { defineStore } from 'pinia'
import { Task, TaskSearchResult } from "@/types/index";

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref<Task[]>([
        {'id': crypto.randomUUID(), 'name': 'Feed the cat', 'isCompleted': true},
        {'id': crypto.randomUUID(), 'name': 'Water the flowers', 'isCompleted': false},
        {'id': crypto.randomUUID(), 'name': 'Take out the trash', 'isCompleted': false},
        {'id': crypto.randomUUID(), 'name': 'Complete the tasks', 'isCompleted': true},
    ]);

    function findById(id: string): TaskSearchResult | null {
        const index = tasks.value.findIndex((task) => task.id === id);

        if (index >= 0) {
            return {task: tasks.value[index], index};
        }

       return null;
    }

    function add(name: string) {
        tasks.value.push({'id': crypto.randomUUID(), 'name': name, 'isCompleted': false})
    }

    function complete(id: string) {
        let result: TaskSearchResult = findById(id);

        if (result) {
            result.task.isCompleted = true
        }
    }

    function restart(id: string) {
        let result: TaskSearchResult = findById(id);

        if (result) {
            result.task.isCompleted = false
        }
    }

    function remove(id: string) {
        let result: TaskSearchResult = findById(id);

        if (result) {
            tasks.value.splice(result.index, 1);
        }
    }

    return { tasks, add, complete, restart, remove };
})