<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "@/types";
import TaskList from "./components/TaskList.vue";
import CompletedTaskList from "./components/CompletedTaskList.vue";

</script>

<template>
  <div class="flex justify-center items-center h-screen gap-6">
    <TaskList />
  </div>
</template>

<style scoped>
</style>
