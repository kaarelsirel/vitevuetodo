<script setup lang="ts">
import { Trash, Check, RotateCcw } from "lucide-vue-next";
import type { Task } from "../App.vue";

defineProps<{
  task: Task;
}>();
</script>

<template>
  <div class="card card-border border-base-300 bg-base-100 w-full">
    <div class="card-body">
      <div class="flex justify-between items-center">
        <h1 class="text-xl" :class="{ 'line-through': task.isCompleted }">{{ task.name }}</h1>
        <div class="flex gap-2">
          <button class="btn btn-square btn-sm" :class="{'hover:btn-warning': task.isCompleted, 'hover:btn-success': !task.isCompleted }" @click="$emit('toggle-task', task.id)">
            <RotateCcw v-if="task.isCompleted" size="20"/>
            <Check v-else size="20"/>
          </button>
          <button class="btn btn-square hover:btn-error btn-sm" @click="$emit('remove-task', task.id)">
            <Trash size="20"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>