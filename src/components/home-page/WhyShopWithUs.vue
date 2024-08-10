<template>
  <div class="shop-with-us text-center pt-10 pb-5 mt-10">
    <div class="title pb-8">
      <h2 class="text-white text-[35px] font-black">
        <span class="text-[#2dfbdf]">Why shop</span> with us?
      </h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3" class="flex justify-center items-center">
          <v-card
            height="250"
            elevation="0"
            color="transparent"
            class="text-white"
          >
            <div class="parent flex justify-center">
              <img
                src="../../assets/images/free-shipping-min.png"
                alt="free-shipping"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
              >Free Shipping on First Order</v-card-title
            >
            <v-card-text class="pb-0"
              >Praesent suscipit mattis facilisis</v-card-text
            >
            <a href="#" class="underline">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3" class="flex justify-center items-center">
          <v-card
            height="250"
            elevation="0"
            color="transparent"
            class="text-white"
          >
            <div class="parent flex justify-center">
              <img
                src="../../assets/images/weekly-flash-sales-min.png"
                alt="weekly flash sales"
              />
            </div>
            <v-card-title style="font-weight: 700"
              >Weekly Flash Sale</v-card-title
            >
            <v-card-text class="pb-0"
              >Praesent suscipit mattis facilisis</v-card-text
            >
            <a href="#" class="underline">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3" class="flex justify-center items-center">
          <v-card
            height="250"
            elevation="0"
            color="transparent"
            class="text-white"
          >
            <div class="parent flex justify-center">
              <img src="../../assets/images/discount-min.png" alt="discount" />
            </div>
            <v-card-title style="font-weight: 700"
              >Anual Payment Discount</v-card-title
            >
            <v-card-text class="pb-0"
              >Praesent suscipit mattis facilisis</v-card-text
            >
            <a href="#" class="underline">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3" class="flex justify-center items-center">
          <v-card
            height="250"
            elevation="0"
            color="transparent"
            class="text-white"
          >
            <div class="parent flex justify-center">
              <img
                src="../../assets/images/cash-back-min.png"
                alt="cash back"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
              >Cashback Reward Program</v-card-title
            >
            <v-card-text class="pb-0"
              >Praesent suscipit mattis facilisis</v-card-text
            >
            <a href="#" class="underline">Learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.shop-with-us {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
}
</style>
class="pb-0"
