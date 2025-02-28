<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "@/types";
import TaskList from "./components/TaskList.vue";

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <TaskList />
  </div>
</template>

<style scoped>
</style>
