<template>
  <div>
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper :products="flashDeals" />
  </div>
</template>

<script setup>
// components
import UpperBanner from "@/components/home-page/UpperBanner.vue";
import TheFeatures from "@/components/home-page/TheFeatures.vue";
import TopOffers from "@/components/home-page/TopOffers.vue";
import ProductsSwiper from "@/components/home-page/ProductsSwiper.vue";

// store
import { computed, onMounted } from "vue";
import { useProductsStore } from "@/stores/products";

const productStore = useProductsStore();

// Define flashDeals as a computed property
const flashDeals = computed(() => productStore.flashDeals);

onMounted(async () => {
  await productStore.getProducts();
});
</script>
