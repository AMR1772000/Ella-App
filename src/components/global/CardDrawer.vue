<template>
  <v-navigation-drawer location="right" v-model="drawer" temporary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro
      distinctio ipsa. Pariatur eaque iste velit cumque quaerat maxime numquam
      aliquam dolores incidunt quidem! Hic, animi? Assumenda debitis libero aut!
    </p>

    <v-btn @click="cartStore.deleteItem(105)">Delete</v-btn>
  </v-navigation-drawer>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
const Emitter = inject("Emitter");
const drawer = ref(false);

import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

onMounted(() => {
  Emitter.on("openCart", () => (drawer.value = true));
  cartStore.getCartItems();

})
</script>
