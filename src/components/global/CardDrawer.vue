<template>
  <v-navigation-drawer location="right" v-model="drawer" temporary>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro
      distinctio ipsa. Pariatur eaque iste velit cumque quaerat maxime numquam
      aliquam dolores incidunt quidem! Hic, animi? Assumenda debitis libero aut!
    </p>
  </v-navigation-drawer>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => (this.drawer = true));
  },
};
</script>

<style lang="scss" scoped></style>
