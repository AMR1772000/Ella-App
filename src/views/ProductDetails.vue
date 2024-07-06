<template>
  <div class="product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <!-- main image -->
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            :alt="singleProduct.title"
            class="w-full h-[550px]"
            v-if="!loading"
          />
          <!-- skeleton -->
          <v-skeleton-loader
            v-if="loading"
            type="image,image,image"
          ></v-skeleton-loader>
          <!-- images tabs -->
          <v-tabs center-active height="220" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              :value="img"
              class="mx-10"
            >
              <img
                :src="img"
                :alt="singleProduct.title"
                width="200"
                height="250"
              />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-0">
          <!-- skeleton -->
          <v-skeleton-loader
            v-if="loading"
            type="article,article,article,button"
          ></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <!-- title -->
            <v-card-title
              class="px-0"
              style="font-size: 18px; font-weight: 700"
            >
              ({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale
            </v-card-title>
            <!-- rating and Stock -->
            <div class="flex items-center gap-3">
              <v-rating
                class="pb-1"
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
              ></v-rating>
              <span class="mt-1 text-sm text-[#484848]"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <!-- description -->
            <v-card-text class="px-0 text-sm text-[#484848]">{{
              singleProduct.description
            }}</v-card-text>
            <!-- Brand -->
            <v-card-text class="px-0 pt-0 pb-2 text-sm text-[#484848]"
              >Brand: {{ singleProduct.brand }}</v-card-text
            >
            <!-- Availability -->
            <v-card-text class="px-0 pt-0 pb-2 text-sm text-[#484848]"
              >Availability:
              {{
                singleProduct.stock > 0 ? "In Stock" : "Out Of Stock"
              }}</v-card-text
            >
            <!-- price -->
            <v-card-text class="pl-0 py-0">
              $<del>{{ singleProduct.price }}</del> From
              <span class="font-black text-base"
                >${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  )
                }}</span
              >
            </v-card-text>
            <!-- Quantity -->
            <v-card-text class="pl-0 pb-2"> Quantity: </v-card-text>
            <div
              class="counter w-fit px-1 py-2"
              style="border-radius: 30px; border: 1px solid rgb(161, 161, 161)"
            >
              <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                class="text-center text-[14px]"
                style="border: none; outline: none; width: 70px"
                min="1"
                v-model="quantity"
              />
              <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
            </div>
            <!-- button Add to card -->
            <div class="w-full px-0">
              <v-btn
                class="mt-7 w-[75%]"
                variant="outlined"
                height="50"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  background-color: #454545;
                  color: white;
                "
                >Add To Cart</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, computed } from "vue";
import { useProductsStore } from "@/stores/products";
import { useRoute } from "vue-router";

const route = useRoute();
const productStore = useProductsStore();
const singleProduct = computed(() => productStore.singleProduct);
const tab = ref("");
const quantity = ref(1);
const loading = ref(false);
onBeforeMount(async () => {
  loading.value = true;
  await productStore.getSingleProduct(route.params.productId);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
