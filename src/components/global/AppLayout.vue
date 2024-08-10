<template>
  <v-layout class="relative">
    <CardDrawer />
<<<<<<< HEAD
    <v-main class="mt-[145px]">
=======
    <v-main class="mt-[160px]">
>>>>>>> bdbebbcae6153bd29ab8f378d94f26445f94a71b
      <slot> </slot>
    </v-main>
    <AppNav />
    <FixedNav />
    <AppFooter />
  </v-layout>
</template>

<script setup>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import CardDrawer from "./CardDrawer.vue";
</script>

<style lang="scss" scoped></style>
