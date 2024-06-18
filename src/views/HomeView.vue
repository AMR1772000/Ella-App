<template>
  <div>
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
  </div>
</template>

<script setup>
// components
import UpperBanner from "@/components/home-page/UpperBanner.vue";
import TheFeatures from "@/components/home-page/TheFeatures.vue";
import TopOffers from "@/components/home-page/TopOffers.vue";

// store
import { useProductsStore } from "../stores/products"; // Ensure the path is correct
import { onMounted } from "vue";

// Create an instance of the store
const productsStore = useProductsStore();

// Use the store action
onMounted(() => {
  productsStore.getProducts();
});
</script>
