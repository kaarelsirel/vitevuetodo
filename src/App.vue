<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "@/types";
import TaskList from "./components/TaskList.vue";

let tasks = ref<Task[]>([
  {'id': crypto.randomUUID(), 'name': 'Feed the cat', 'isCompleted': true},
  {'id': crypto.randomUUID(), 'name': 'Water the flowers', 'isCompleted': false},
  {'id': crypto.randomUUID(), 'name': 'Take out the trash', 'isCompleted': false},
  {'id': crypto.randomUUID(), 'name': 'Complete the tasks', 'isCompleted': true},
]);
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <TaskList :tasks/>
  </div>
</template>

<style scoped>
</style>
