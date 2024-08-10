import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItems(item) {
      this.cartItems.push(item);
      console.log(this.cartItems);
    },
  },
});
