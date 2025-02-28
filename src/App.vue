<script setup lang="ts">
import TaskItem from "./components/TaskItem.vue";
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="card card-border bg-base-100 w-96">
      <div class="card-body">
        <h2 class="card-title font-bold text-3xl">My Tasks</h2>
        <div class="flex flex-col gap-2 mt-3">
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
