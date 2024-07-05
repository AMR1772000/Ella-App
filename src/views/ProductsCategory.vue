<template>
  <div class="products-category mt-10">
    <h1 class="text-center text-[50px] font-extrabold text-[#323232]">
      {{ route.params.title }}
    </h1>
    <v-container>
      <v-card :loading="loading" class="pt-5" min-height="700px" elevation="0">
        <v-row class="flex justify-center items-center">
          <v-col cols="12">
            <v-row v-if="loading" class="flex justify-center items-center">
              <v-col cols="3" v-for="num in 4" :key="num">
                <v-skeleton-loader
                  type="image,article,button "
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row v-if="!loading" class="flex justify-center items-center">
          <v-col
            cols="3"
            v-for="item in productCategory.products"
            :key="item.id"
          >
            <v-lazy>
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="parent h-[240px] overflow-hidden">
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
                    height="50"
                    class="mt-4 px-9"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    density="compact"
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/stores/products";
import { onMounted, watch, computed, ref } from "vue";
import { useRoute } from "vue-router";

const showenItem = ref([]);
const loading = ref(false);
const route = useRoute();
const productStore = useProductsStore();

//computed
const productCategory = computed(() => productStore.productCategory);

// Watch for changes in route.params.category
watch(
  () => route.params.category,
  async (newCategory) => {
    document.documentElement.scrollTo(0, 0);
    loading.value = true;
    await productStore.getProductsByCategory(newCategory);
    loading.value = false;
  }
);

onMounted(async () => {
  loading.value = true;
  await productStore.getProductsByCategory(route.params.category);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
