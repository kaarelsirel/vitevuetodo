<script setup lang="ts">
import { Trash, Check, RotateCcw } from "lucide-vue-next";
import type { Task } from "../App.vue";

defineProps<{
  task: Task;
}>();
</script>

<template>
  <div class="card card-border bg-base-100 w-full">
    <div class="card-body">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold" :class="{ 'line-through': task.isCompleted }">{{ task.name }}</h1>
        <div class="flex gap-2">
          <button v-if="task.isCompleted" class="btn btn-square btn-warning btn-sm" @click="$emit('restart-task', task.id)">
            <RotateCcw />
          </button>
          <button v-else class="btn btn-square btn-success btn-sm" @click="$emit('complete-task', task.id)">
            <Check />
          </button>
          <button class="btn btn-square btn-error btn-sm" @click="$emit('remove-task', task.id)">
            <Trash />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>