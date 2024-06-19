<template>
  <div class="flash-deals pt-16">
    <v-container fluid class="pt-9 mx-5">
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img
              :src="
                showenItem[item.title] ? showenItem[item.title] : item.thumbnail
              "
              :alt="item.title"
              class="w-full h-[200px]"
            />
            <v-card-text class="pl-0 pr-3">
              ({{ item.title }})
              {{
                item.description.split(" ").length <= 7
                  ? item.description
                  : item.description.split(" ").slice(0, 6).join(" ") + " ....."
              }}
            </v-card-text>
            <v-rating
              class="pb-1"
              v-model="item.rating"
              half-increments
              readonly
              color="yellow-darken-2"
              size="x-small"
              density="combact"
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
                ><img
                  :src="pic"
                  alt=""
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
                density="combat"
                >Choose Options</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const showenItem = ref([]);

// Define the props
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
