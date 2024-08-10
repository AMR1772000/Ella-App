<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="950" max-height="500">
      <v-icon
        @click="dialog = false"
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: black;
          color: rgb(198, 198, 198);
          font-size: 18px;
          padding: 13px;
          z-index: 10;
          cursor: pointer;
        "
        >mdi-close</v-icon
      >
      <v-card class="content-card" elevation="0">
        <v-container fluid class="bg-white pt-10 px-10">
          <v-row>
            <v-col cols="7" class="pr-10">
              <!-- main image -->
              <img
                :src="tab ? tab : product.thumbnail"
                :alt="product.title"
                class="w-full h-[450px]"
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
                  v-for="(img, i) in product.images"
                  :key="i"
                  :value="img"
                  class="mx-10"
                >
                  <img
                    :src="img"
                    :alt="product.title"
                    width="100"
                    height="130"
                  />
                </v-tab>
              </v-tabs>
            </v-col>

            <v-col cols="5" class="pt-0">
              <!-- skeleton -->
              <v-skeleton-loader
                v-if="loading"
                type="article,article,article,button"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <!-- title -->
                <v-card-title
                  class="px-0 pb-0"
                  style="
                    font-size: 18px;
                    font-weight: 700;
                    white-space: pre-wrap;
                  "
                >
                  ({{ product.title }}) Sample - {{ product.category }} For Sale
                </v-card-title>
                <!-- rating and Stock -->
                <div class="flex items-center gap-3">
                  <v-rating
                    class="pb-1 pt-0"
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="x-small"
                    density="compact"
                  ></v-rating>
                  <span class="mt-1 text-sm text-[#484848] pt-0"
                    >Stock: {{ product.stock }}</span
                  >
                </div>
                <!-- description -->
                <v-card-text class="px-0 pt-2 text-sm text-[#484848]">{{
                  product.description
                }}</v-card-text>
                <!-- Brand -->
                <v-card-text class="px-0 pt-0 pb-2 text-sm text-[#484848]"
                  >Brand: {{ product.brand }}</v-card-text
                >
                <!-- Availability -->
                <v-card-text class="px-0 pt-0 pb-2 text-sm text-[#484848]"
                  >Availability:
                  {{
                    product.stock > 0 ? "In Stock" : "Out Of Stock"
                  }}</v-card-text
                >
                <!-- price -->
                <v-card-text class="pl-0 py-0">
                  $<del>{{ product.price }}</del> From
                  <span class="font-black text-base"
                    >${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <!-- Quantity -->
                <v-card-text class="pl-0 pb-2"> Quantity: </v-card-text>
                <div
                  class="counter w-fit px-1 py-2"
                  style="
                    border-radius: 30px;
                    border: 1px solid rgb(161, 161, 161);
                  "
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
                <!-- Subtitle -->
                <v-card-text class="pl-0 pb-2">
                  Subtitle: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
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
                    @click="addToCart(product)"
                    >Add To Cart</v-btn
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref, inject } from "vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

const Emitter = inject("Emitter");
const tab = ref("");
const quantity = ref(1);
const loading = ref(false);
const dialog = ref(false);
const product = ref("");

const addToCart = (item) => {
  item.quantity = quantity.value;
  cartStore.addItems(item);
}
onMounted(() => {
  Emitter.on("openQuickView", (data) => {
    loading.value = true;
    product.value = data;
    dialog.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  });
});
</script>

<style lang="scss" scoped>
.content-card {
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: rgb(149, 149, 149);
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    width: 8px;
    background-color: rgb(200, 200, 200);
  }
}
</style>
