<template>
  <div class="new-products mb-10">
    <div class="title mt-15 px-5 flex items-center justify-between">
      <h2 class="font-black text-[32px]">New Products</h2>
      <a href="#" class="text-sm underline">Shop Now</a>
    </div>
    <v-container fluid>
      <v-row>
        <!-- skeleton -->
        <v-col cols="7" v-if="!products.length" class="mt-16">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image,article,button "
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="7" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-12 px-5"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="img-parent relative h-[240px] overflow-hidden">
                    <img
                      :src="
                        showenItem[item.title]
                          ? showenItem[item.title]
                          : item.thumbnail
                      "
                      :alt="item.title"
                      :style="`transition: 0.8s all ease-in-out; scale: ${
                        isHovering ? 1.05 : 1
                      };cursor: pointer;`"
                      class="w-full h-full"
                      v-bind="props"
                    />
                    <v-btn
                      density="compact"
                      width="80"
                      height="30"
                      variant="outlined"
                      class="bg-white quick-view-btn"
                      style="
                        text-transform: none;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 30px;
                        font-size: 14px;
                        transition: 0.2s all ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>

                <v-card-text class="px-0 pt-0">
                  {{
                    `(${item.title}) ${item.description}`.length <= 47
                      ? `(${item.title}) ${item.description}`
                      : `(${item.title}) ${item.description}`.substring(0, 47) +
                        "...."
                  }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  $<del>{{ item.price }}</del> From
                  <span class="text-red font-black text-base"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]">
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :key="i"
                    :value="pic"
                    size="x-small"
                    rounded="xl"
                    :ripple="false"
                    ><img
                      :src="pic"
                      :alt="item.images[i]"
                      width="35"
                      height="35"
                      style="
                        border-radius: 50%;
                        border: 1px solid rgb(135, 135, 135);
                      "
                  /></v-btn>
                </v-btn-toggle>
                <div>
                  <v-btn
                    class="py-4 px-9 mt-4"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    density="compact"
                    @click="
                      $router.push({
                        name: 'product_details',
                        params: { productId: item.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="5" class="pt-5 pl-3">
          <img
            src="../../assets/images/vr-banner.webp"
            alt="vr banner"
            class="w-full"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { defineProps, ref, inject } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";

const Emitter = inject("Emitter");

const openQuickView = (product) => {
  Emitter.emit("openQuickView", product);
};

const showenItem = ref([]);
const modules = [Pagination];
// Define the props
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
}
</style>
