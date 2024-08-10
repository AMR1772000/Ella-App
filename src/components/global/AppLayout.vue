<template>
  <v-layout class="relative">
    <CardDrawer />
    <v-main class="mt-[145px]">
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
