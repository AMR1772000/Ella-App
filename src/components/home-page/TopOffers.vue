<template>
  <div class="top-offers bg-grey-lighten-4 pt-9">
    <v-container fluid>
      <v-row>
        <v-col cols="4" class="pr-3">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent overflow-hidden cursor-pointer h-[290px] rounded-lg"
              v-bind="props"
            >
              <img
                src="../../assets/images/playstations.webp"
                alt="playstation"
                class="w-full h-full"
                :style="`scale: ${
                  isHovering ? 1.05 : 1
                };transition: 0.5s all ease-in-out;`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" class="pr-3">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent overflow-hidden cursor-pointer h-[290px] rounded-lg"
              v-bind="props"
            >
              <img
                src="../../assets/images/headset.webp"
                alt="headset"
                class="w-full h-full"
                :style="`scale: ${
                  isHovering ? 1.05 : 1
                };transition: 0.5s all ease-in-out;`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent overflow-hidden cursor-pointer h-[290px] rounded-lg"
              v-bind="props"
            >
              <img
                src="../../assets/images/chairs.webp"
                alt="chairs"
                class="w-full h-full"
                :style="`scale: ${
                  isHovering ? 1.05 : 1
                }; transition: 0.5s all ease-in-out;`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>

      <v-row class="mt-9">
        <v-col cols="6" class="pr-5">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent overflow-hidden cursor-pointer h-full rounded-lg"
              v-bind="props"
            >
              <img
                src="../../assets/images/iphones.webp"
                alt="iphones"
                class="w-full h-full"
                :style="`scale:${
                  isHovering ? 1.05 : 1
                }; transition: 0.5s all ease-in-out;`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="pl-5">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent overflow-hidden cursor-pointer h-full rounded-lg"
              v-bind="props"
            >
              <img
                src="../../assets/images/laptops.webp"
                alt="laptops"
                class="w-full h-full"
                :style="`scale:${
                  isHovering ? 1.05 : 1
                }; transition: 0.5s all ease-in-out;`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
