<script setup lang="ts">

import { Plus } from "lucide-vue-next";
import { ref } from "vue";
import { Task } from "@/types/index";
import TaskListItem from "./TaskListItem.vue";
import { useTasksStore } from "../stores/tasks";

const tasksStore = useTasksStore();
let tasks: Task[] = tasksStore.tasks;

let newTaskName = ref<string>('');
</script>

<template>
  <div class="card card-border bg-base-100 w-96">
    <div class="card-body">
      <div class="mb-2">
        <h2 class="card-title font-bold text-3xl">My Tasks</h2>
      </div>
      <div class="join w-full">
        <label class="input join-item">
          <input type="text" placeholder="What do you need to do?" required v-model="newTaskName" />
        </label>
        <button class="btn join-item" @click="tasksStore.add(newTaskName)">
          <Plus/>
        </button>
      </div>
      <div class="flex flex-col gap-2 mt-3">
        <TaskListItem
            v-if="tasks.length > 0"
            v-for="task in tasks"
            :key="task.id"
            :task
            @complete-task="tasksStore.complete(task.id)"
            @restart-task="tasksStore.restart(task.id)"
            @remove-task="tasksStore.remove(task.id)"
        />
        <h1 v-else>You have no tasks.</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>