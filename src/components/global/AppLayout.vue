<template>
  <v-layout class="relative">
    <CardDrawer />
    <v-main class="mt-[160px]">
      <slot> </slot>
    </v-main>
    <AppNav />
    <AppFooter />
  </v-layout>
</template>

<script setup>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import CardDrawer from "./CardDrawer.vue";
</script>

<style lang="scss" scoped></style>
