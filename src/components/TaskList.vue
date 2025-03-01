<script setup lang="ts">
import { ref, computed } from "vue";
import { Task } from "@/types/index";

import TaskListItem from "./TaskListItem.vue";
import { useTasksStore } from "../stores/tasks";
import { Plus } from "lucide-vue-next";

const tasksStore = useTasksStore();
let inProgressTasks: Task[] = computed(() => tasksStore.inProgressTasks);
let completedTasks: Task[] = computed(() => tasksStore.completedTasks);

let newTaskName = ref<string>('');

function addNewTask(name: string) {
  if (name.length < 3) {
    return alert("Name must be at least 3 characters.");
  }

  tasksStore.add(name);
  newTaskName.value = '';
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="card card-border border-base-300 bg-base-100 w-96">
    <div class="card-body">
      <div class="mb-2">
        <h2 class="card-title font-bold text-3xl">My Tasks ({{inProgressTasks.length}})</h2>
      </div>
      <div class="join w-full">
        <label class="input join-item">
          <input type="text" placeholder="What do you need to do?" required v-model="newTaskName" />
        </label>
        <button class="btn join-item hover:btn-neutral" @click="addNewTask(newTaskName)">
          <Plus size="20"/>
        </button>
      </div>
      <div class="flex flex-col gap-2 mt-3">
        <TaskListItem
            v-if="inProgressTasks.length > 0"
            v-for="task in inProgressTasks"
            :key="task.id"
            :task
            @toggle-task="tasksStore.toggleTaskStatus(task.id)"
            @remove-task="tasksStore.remove(task.id)"
        />
        <h1 v-else>You don't have any tasks to complete.</h1>
      </div>
    </div>
  </div>
    <div class="collapse collapse-arrow bg-base-100 border-base-300 border rounded-lg p-2">
      <input type="checkbox" />
      <div class="collapse-title font-semibold">Completed Tasks ({{completedTasks.length}})</div>
      <div class="collapse-content text-sm">
        <div class="flex flex-col gap-2 mt-3">
        <TaskListItem
            v-if="completedTasks.length > 0"
            v-for="task in completedTasks"
            :key="task.id"
            :task
            @toggle-task="tasksStore.toggleTaskStatus(task.id)"
            @remove-task="tasksStore.remove(task.id)"
        />
          <h1 v-else>You haven't completed any tasks yet.</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>