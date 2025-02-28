<script setup lang="ts">
import TaskItem from "./components/TaskItem.vue";
import {useId, ref} from "vue";


export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

let tasks = ref<Task[]>([
  {'id': useId(), 'name': 'Feed the cat', 'isCompleted': true},
  {'id': useId(), 'name': 'Water the flowers', 'isCompleted': false},
  {'id': useId(), 'name': 'Take out the trash', 'isCompleted': false},
  {'id': useId(), 'name': 'Complete the tasks', 'isCompleted': true},
]);

const completeTask = (id: string) => {
  const taskIndex = tasks.value.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks.value[taskIndex].isCompleted = true;
  }
}

const restartTask = (id: string) => {
  const taskIndex = tasks.value.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks.value[taskIndex].isCompleted = false;
  }
}

const removeTask = (id: string) => {
  const taskIndex = tasks.value.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks.value.splice(taskIndex, 1);
  }
}

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="card card-border bg-base-100 w-96">
      <div class="card-body">
        <h2 class="card-title font-bold text-3xl">My Tasks</h2>
        <div class="flex flex-col gap-2 mt-3">
          <TaskItem
              v-if="tasks.length > 0"
              v-for="task in tasks"
              :key="task.id"
              :task
              @complete-task="completeTask"
              @restart-task="restartTask"
              @remove-task="removeTask"
          />
          <h1 v-else>You have no tasks.</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
