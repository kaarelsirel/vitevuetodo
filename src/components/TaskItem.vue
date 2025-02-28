<script setup lang="ts">

import {Trash, Check} from "lucide-vue-next";
</script>

<template>
  <div class="card card-border bg-base-100 w-full">
    <div class="card-body">
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold">Task Name</h1>
        <div class="flex gap-2">
          <button class="btn btn-square btn-success btn-sm">
            <Check />
          </button>
          <button class="btn btn-square btn-error btn-sm">
            <Trash />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>