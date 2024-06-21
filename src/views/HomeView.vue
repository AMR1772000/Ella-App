<template>
  <div>
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper :products="flashDeals" />
    <TopCategories />
    <NewProducts :products="newProducts" />
  </div>
</template>

<script setup>
// components
import UpperBanner from "@/components/home-page/UpperBanner.vue";
import TheFeatures from "@/components/home-page/TheFeatures.vue";
import TopOffers from "@/components/home-page/TopOffers.vue";
import ProductsSwiper from "@/components/home-page/ProductsSwiper.vue";
import TopCategories from "@/components/home-page/TopCategories.vue";
import NewProducts from "@/components/home-page/NewProducts.vue";

// store
import { computed, onMounted } from "vue";
import { useProductsStore } from "@/stores/products";

const productStore = useProductsStore();

// Define flashDeals & newProducts as a computed properties
const flashDeals = computed(() => productStore.flashDeals);
const newProducts = computed(() => productStore.newProducts);

onMounted(async () => {
  await productStore.getProducts();
});
</script>
