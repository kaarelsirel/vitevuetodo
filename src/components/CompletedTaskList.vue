<script setup lang="ts">

import TaskListItem from "./TaskListItem.vue";
import {Plus} from "lucide-vue-next";
</script>

<template>
  <div class="card card-border bg-base-100 w-96">
    <div class="card-body">
      <div class="mb-2">
        <h2 class="card-title font-bold text-3xl">Completed Tasks</h2>
      </div>
      <div class="flex flex-col gap-2 mt-3">

        <h1>You haven't completed any tasks yet.</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>