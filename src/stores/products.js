import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
