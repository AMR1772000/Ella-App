<template>
  <div>
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper
      :products="flashDeals"
      :title="`Flash Deals`"
      :textColor="`red-500`"
    />
    <TopCategories />
    <NewProducts :products="newProducts" />
    <QualityFeatures />
    <ProductsSwiper
      :products="mobilePhones"
      :title="`Top Mobile Phones`"
      :textColor="`black`"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img
            src="../assets/images/band-left-cover.webp"
            alt="banner left"
            class="w-full"
          />
        </v-col>
        <v-col cols="6">
          <img
            src="../assets/images/band-right-cover.webp"
            alt="banner left"
            class="w-full"
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsSwiper
      :products="watches"
      :title="`Top Watches`"
      :textColor="`black`"
    />
    <v-container fluid>
      <v-row>
        <v-col>
          <img
            src="../assets/images/tv-banner.webp"
            alt="tv-banner"
            class="w-full"
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsSwiper
      :products="homeDecoration"
      :title="`Top Home Decoration`"
      :textColor="`black`"
    />
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
import QualityFeatures from "@/components/home-page/QualityFeatures.vue";

// store
import { computed, onMounted } from "vue";
import { useProductsStore } from "@/stores/products";

const productStore = useProductsStore();

// Define flashDeals & newProducts as a computed properties
const flashDeals = computed(() => productStore.flashDeals);
const newProducts = computed(() => productStore.newProducts);
const mobilePhones = computed(() => productStore.mobilePhones);
const watches = computed(() => productStore.watches);
const homeDecoration = computed(() => productStore.homeDecoration);

onMounted(async () => {
  await productStore.getProducts();
});
</script>
