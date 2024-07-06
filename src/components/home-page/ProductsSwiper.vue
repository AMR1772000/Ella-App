<template>
  <div class="products-swiper pt-16">
    <div class="title mb-5 px-5 flex items-center justify-between">
      <h2 class="font-black text-[32px]" :class="[`text-${textColor}`]">
        {{ title }}
      </h2>
      <a href="#" class="text-sm underline">Shop Now</a>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12" class="mt-16">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image,article,button "
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000 }"
      class="pb-12 px-10"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent h-[280px] overflow-hidden">
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
            </div>
          </v-hover>

          <v-card-text class="pl-0 pr-3">
            {{
              `(${item.title}) ${item.description}`.length <= 57
                ? `(${item.title}) ${item.description}`
                : `(${item.title}) ${item.description}`.substring(0, 57) +
                  "...."
            }}
          </v-card-text>
          <v-rating
            class="pb-1"
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-2"
            size="x-small"
            density="compact"
          ></v-rating>
          <v-card-text class="pl-0 pt-0">
            $<del>{{ item.price }}</del> From
            <span class="text-red font-black text-base"
              >${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
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
                width="40"
                height="40"
                style="
                  border-radius: 50%;
                  border: 1px solid rgb(135, 135, 135);
                "
            /></v-btn>
          </v-btn-toggle>
          <div>
            <v-btn
              class="py-3 px-16 mt-6"
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
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";

const showenItem = ref([]);
const modules = [Pagination, Navigation, Autoplay];
// Define the props
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid rgb(95, 95, 95);
    border-radius: 50%;
    background-color: white;
    top: 30%;
    &::after {
      font-size: 13px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(65, 65, 65);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
}
</style>
