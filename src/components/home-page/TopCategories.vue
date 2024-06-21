<template>
  <div class="top-cat mt-14">
    <div class="cyper-banner">
      <img
        src="../../assets/images/Top-category.webp"
        alt="top-categeory"
        class="w-full h-[250px]"
      />
    </div>
    <div class="categories">
      <div class="mt-14 flex items-center justify-center px-5">
        <h2 class="font-extrabold text-center flex-grow-1">Top Categories</h2>
        <a href="#" class="underline text-xs text-black font-thin">Shop Now</a>
      </div>
      <v-container fluid>
        <v-row class="pl-3">
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card class="text-center py-2 px-2" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="parent overflow-hidden w-full h-[185px]"
                  style="border-radius: 50%"
                >
                  <img
                    :src="cat.image"
                    :alt="cat.title"
                    :style="`transition: 0.3s all ease-in-out; scale: ${
                      isHovering ? 1.05 : 1
                    };cursor: pointer;`"
                    class="m-auto w-full h-full"
                    v-bind="props"
                  />
                </div>
              </v-hover>

              <v-card-text class="px-0">{{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
  {
    title: "Mobile Phones",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
  },
  {
    title: "Laptops & Tablets",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
  },
  {
    title: "Televesions",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
  },
  {
    title: "PCs & Accessories",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
  },
  {
    title: "Audio & Video",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
  },
  {
    title: "Gaming & Accessories",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
  },
  {
    title: "Home Appliances",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
  },
  {
    title: "Kitchen Appliances",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
  },
  {
    title: "Cameras",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
  },
  {
    title: "Consumables",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
  },
  {
    title: "Smart Homes",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
  },
  {
    title: "Accessories",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
  },
]);
</script>

<style lang="scss" scoped></style>
