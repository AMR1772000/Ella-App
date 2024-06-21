<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./components/global/AppLayout.vue";
</script>

<template>
  <app-layout>
    <RouterView />
  </app-layout>
</template>
<style>
.v-rating__wrapper {
  margin-right: 5px;
}
.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 20px);
}
</style>
