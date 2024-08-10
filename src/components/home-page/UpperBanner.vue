<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont text-white pt-[40px] pl-[80px]">
              <h3 class="text-[45px] font-black">
                <span class="text-[#2dfbdf]">Huge Saving</span> on UHD
                Televisions
              </h3>
              <p class="hint mt-5 mb-16">
                Sale up to 70% off on selected items*
              </p>
              <v-btn
                variant="outlined"
                height="50"
                width="150"
                style="border-radius: 30px; text-transform: none"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup></script>

<style>
.banner .parent {
  height: 450px;
  background-image: url(../../assets/images/banner-bg.jpg);
  background-size: cover;
  background-position: left top;
}
.btn-shop {
  border-radius: 30px;
  text-transform: none;
}
</style>
