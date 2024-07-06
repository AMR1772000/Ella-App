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
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
